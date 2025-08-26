import React, { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import './activities.css';
import { MapContainer, TileLayer, Marker, useMapEvents } from 'react-leaflet';
import L from 'leaflet';

// Helper: hash file as SHA-256 (returns hex string)
async function hashFile(file) {
  const arrayBuffer = await file.arrayBuffer();
  const hashBuffer = await window.crypto.subtle.digest('SHA-256', arrayBuffer);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
}

// Helper: reverse geocode lat/lng to address using Nominatim
async function reverseGeocode(lat, lng) {
  try {
    const res = await fetch(`https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${lat}&lon=${lng}`);
    const data = await res.json();
    return data.display_name || `${lat.toFixed(5)}, ${lng.toFixed(5)}`;
  } catch {
    return `${lat.toFixed(5)}, ${lng.toFixed(5)}`;
  }
}

const activityConfigs = {
  'plant-tree': {
    title: 'Plant TREES',
    description: 'Join our city greening initiative! Help us plant trees and make our city greener, cleaner, and more beautiful for everyone. Every tree you plant helps fight climate change and supports local biodiversity.',
    button: 'MARK AS COMPLETED',
    image: 'https://img.freepik.com/free-vector/hand-drawn-people-planting-tree-illustration_23-2149214943.jpg?t=st=1752475331~exp=1752478931~hmac=5c15df763c6f2c71def4b2d1ce42835bae2b74628a40932e51b2a6d8e91e7132&w=1800',
    theme: 'green',
    speciesLabel: 'Plant Species',
    speciesOptions: ['Neem', 'Peepal', 'Banyan', 'Mango', 'Ashoka', 'Gulmohar', 'Teak', 'Other']
  },
  'clean-up': {
    title: 'Clean-Up DRIVE',
    description: 'Join our clean-up drive! Help us keep our environment clean and healthy by participating in community clean-up activities. Every effort counts toward a cleaner planet.',
    button: 'MARK AS COMPLETED',
    image: 'https://img.freepik.com/free-vector/modern-garbage-collection-waste-sorting-flat-composition-with-volunteers-picking-up-litter-junk-left-outdoor-illustration_1284-60212.jpg?t=st=1752497969~exp=1752501569~hmac=90b9e02cb516167b26c5950342ea2dd0f6790bf3a0017f44e2af541f326448f6&w=1480',
    theme: 'teal',
    speciesLabel: 'Type of Waste Collected',
    speciesOptions: ['Plastic', 'Paper', 'Glass', 'Metal', 'Organic', 'Other']
  },
  'eco-commute': {
    title: 'Eco-Friendly COMMUTE',
    description: 'Choose sustainable ways to commute! Use public transport, cycle, or walk to reduce your carbon footprint and contribute to a healthier environment.',
    button: 'MARK AS COMPLETED',
    image: 'https://img.freepik.com/free-vector/landscape-with-couple-using-face-mask-scooter_24877-63725.jpg?t=st=1752486875~exp=1752490475~hmac=fd763f35ac24fcfc601fca493287d58f42e864352d3e8ca1c54680eaf7838f14&w=826',
    theme: 'blue',
    speciesLabel: 'Mode of Commute',
    speciesOptions: ['Bicycle', 'Bus', 'Metro', 'Carpool', 'Walk', 'Electric Vehicle', 'Other']
  },
  'plastic-free': {
    title: 'Plastic Free CHALLENGE',
    description: 'Take the Plastic Free Challenge! Avoid single-use plastics, use reusable bags and bottles, and help reduce plastic pollution in your community.',
    button: 'MARK AS COMPLETED',
    image: 'https://img.freepik.com/free-vector/resources-protection-abstract-concept-illustration-protection-natural-resources-land-conservation-safeguarding-nature-smart-water-use-environment-preservation_335657-771.jpg?t=st=1753341575~exp=1753345175~hmac=5fbb84d3d508b7068d3439916d1feeaf1c86f3748e8fb1958d6b9a19322e7f1d&w=1480',
    theme: 'plastic',
    speciesLabel: 'Plastic-Free Action',
    speciesOptions: [
      'Used reusable bag',
      'Used metal/straw bottle',
      'Avoided plastic packaging',
      'Participated in plastic clean-up',
      'Educated others',
      'Other'
    ]
  }
};

const themeClasses = {
  green: 'plant-tree-theme',
  teal: 'cleanup-theme',
  blue: 'eco-commute-theme',
  plastic: 'plastic-free-theme'
};

const ActivityDetail = () => {
  const { activityKey } = useParams();
  const config = activityConfigs[activityKey] || activityConfigs['plant-tree'];
  const [species, setSpecies] = useState('');
  const [media, setMedia] = useState(null);
  const [location, setLocation] = useState('');
  const [time, setTime] = useState('');
  const [date, setDate] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [wasteWeight, setWasteWeight] = useState('');
  const [wasteUnit, setWasteUnit] = useState('kg');
  const [streak, setStreak] = useState(0);
  const [timerActive, setTimerActive] = useState(false);
  const [timeLeft, setTimeLeft] = useState(0); // in seconds
  const timerRef = useRef(null);
  const [ecoDistance, setEcoDistance] = useState('');
  const [ecoDistanceUnit, setEcoDistanceUnit] = useState('km');
  // Plastic Free Challenge state
  const [plasticAction, setPlasticAction] = useState('');
  const [reward, setReward] = useState(0);
  const [totalCoins, setTotalCoins] = useState(0);
  const [plantsPlanted, setPlantsPlanted] = useState('');
  const [mediaInfo, setMediaInfo] = useState(null);
  const [showUploadForm, setShowUploadForm] = useState(false);
  const [showSummaryPopup, setShowSummaryPopup] = useState(false);
  const isFirstLoad = useRef(true);
  const [lat, setLat] = useState(null);
  const [lng, setLng] = useState(null);
  const [treeHash, setTreeHash] = useState('');
  const [duplicateTreeError, setDuplicateTreeError] = useState('');

  const getActivityStateKey = () => `activityState_${activityKey}`;

  useEffect(() => {
    const storedCoins = parseInt(localStorage.getItem('totalCoins') || '0', 10);
    setTotalCoins(storedCoins);
    const stateStr = localStorage.getItem(getActivityStateKey());
    let shouldShowSummary = false;
    if (stateStr) {
      try {
        const state = JSON.parse(stateStr);
        setSpecies(state.species || '');
        setLocation(state.location || '');
        setTime(state.time || '');
        setDate(state.date || '');
        setWasteWeight(state.wasteWeight || '');
        setWasteUnit(state.wasteUnit || 'kg');
        setStreak(state.streak || 0);
        setEcoDistance(state.ecoDistance || '');
        setEcoDistanceUnit(state.ecoDistanceUnit || 'km');
        setPlasticAction(state.plasticAction || '');
        setReward(state.reward || 0);
        setPlantsPlanted(state.plantsPlanted || '');
        setMediaInfo(state.mediaInfo || null);
        if (state.submitted && state.endTimestamp) {
          const now = Date.now();
          const left = Math.max(0, Math.floor((state.endTimestamp - now) / 1000));
          if (left > 0) {
            setTimeLeft(left);
            setTimerActive(true);
            setSubmitted(true);
            shouldShowSummary = true;
          } else {
            setTimeLeft(0);
            setTimerActive(false);
            setSubmitted(false);
            saveActivityState({
              submitted: false,
              timerActive: false,
              timeLeft: 0,
              endTimestamp: null
            });
          }
        } else {
          setTimeLeft(0);
          setTimerActive(false);
          setSubmitted(false);
        }
      } catch {}
    } else {
      setSubmitted(false);
      setTimerActive(false);
      setTimeLeft(0);
      setStreak(0);
      setReward(0);
    }
    setShowSummaryPopup(shouldShowSummary);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activityKey]);

  const saveActivityState = (custom = {}) => {
    const state = {
      species,
      location,
      time,
      date,
      submitted,
      wasteWeight,
      wasteUnit,
      streak,
      timerActive,
      ecoDistance,
      ecoDistanceUnit,
      plasticAction,
      reward,
      plantsPlanted,
      mediaInfo,
      ...custom,
    };
    if (timerActive && timeLeft > 0) {
      state.endTimestamp = Date.now() + timeLeft * 1000;
    }
    localStorage.setItem(getActivityStateKey(), JSON.stringify(state));
  };

  const formatTime = (secs) => {
    if (secs <= 0) return '00:00:00:00';
    const days = Math.floor(secs / (24 * 3600));
    const hours = Math.floor((secs % (24 * 3600)) / 3600);
    const minutes = Math.floor((secs % 3600) / 60);
    const seconds = secs % 60;
    return `${days.toString().padStart(2, '0')}:${hours
      .toString().padStart(2, '0')}:${minutes
      .toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  useEffect(() => {
    if (timerActive && timeLeft > 0) {
      timerRef.current = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            clearInterval(timerRef.current);
            setTimerActive(false);
            saveActivityState({ timerActive: false, timeLeft: 0, endTimestamp: null });
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(timerRef.current);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [timerActive]);

  useEffect(() => {
    if (isFirstLoad.current) {
      isFirstLoad.current = false;
      return;
    }
    saveActivityState();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [species, location, time, date, submitted, wasteWeight, wasteUnit, streak, timerActive, ecoDistance, ecoDistanceUnit, plasticAction, reward, plantsPlanted, mediaInfo, timeLeft]);

  const getPlantedTreesKey = () => 'plantedTrees';

  const handleMediaChange = async e => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setMedia(file);
      setMediaInfo({ name: file.name, type: file.type });
      if (activityKey === 'plant-tree') {
        const hash = await hashFile(file);
        setTreeHash(hash);
      }
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(async pos => {
          setLat(pos.coords.latitude);
          setLng(pos.coords.longitude);
          const addr = await reverseGeocode(pos.coords.latitude, pos.coords.longitude);
          setLocation(addr);
        }, () => {
          setLat(null);
          setLng(null);
        });
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setDuplicateTreeError('');
    if (activityKey === 'plant-tree' && treeHash && lat && lng) {
      const plantedTrees = JSON.parse(localStorage.getItem(getPlantedTreesKey()) || '{}');
      if (plantedTrees[treeHash]) {
        const prev = plantedTrees[treeHash];
        if (Math.abs(prev.lat - lat) > 0.0001 || Math.abs(prev.lng - lng) > 0.0001) {
          setDuplicateTreeError(`This tree was already planted at ${prev.location}`);
          return;
        }
      }
    }
    setSubmitted(true);
    setShowUploadForm(false);
    let rewardThisSubmission = 0;
    if (activityKey === 'plant-tree') {
      const num = parseInt(plantsPlanted, 10) || 0;
      rewardThisSubmission = 5 * num;
    } else if (activityKey === 'clean-up') {
      let weight = parseFloat(wasteWeight) || 0;
      if (wasteUnit === 'g' || wasteUnit === 'grams') weight = weight / 1000;
      rewardThisSubmission = Math.round(5 * weight);
    } else if (activityKey === 'eco-commute') {
      let dist = parseFloat(ecoDistance) || 0;
      if (ecoDistanceUnit === 'm') dist = dist / 1000;
      rewardThisSubmission = Math.round(2 * dist);
    } else if (activityKey === 'plastic-free') {
      rewardThisSubmission = 10;
    }
    setReward(rewardThisSubmission);
    setTotalCoins((prev) => {
      const newTotal = prev + rewardThisSubmission;
      localStorage.setItem('totalCoins', newTotal);
      return newTotal;
    });
    setStreak((s) => s + 1);
    if (!timerActive) {
      setTimeLeft(86400); // 24 hours in seconds
      setTimerActive(true);
    }
    saveActivityState({
      submitted: true,
      reward: rewardThisSubmission,
      timerActive: true,
      endTimestamp: Date.now() + 86400 * 1000,
      lat,
      lng,
      treeHash,
    });
    if (activityKey === 'plant-tree' && treeHash && lat && lng) {
      const plantedTrees = JSON.parse(localStorage.getItem(getPlantedTreesKey()) || '{}');
      plantedTrees[treeHash] = { lat, lng, location };
      localStorage.setItem(getPlantedTreesKey(), JSON.stringify(plantedTrees));
    }
  };

  function LocationMarker({ lat, lng, setLat, setLng, setLocation }) {
    const map = useMapEvents({
      dragend: () => {
        const center = map.getCenter();
        setLat(center.lat);
        setLng(center.lng);
        reverseGeocode(center.lat, center.lng).then(addr => setLocation(addr));
      }
    });
    useEffect(() => {
      if (lat && lng) {
        map.setView([lat, lng], 16);
      }
    }, [lat, lng, map]);
    return lat && lng ? (
      <Marker position={[lat, lng]} draggable={true}
        eventHandlers={{ dragend: (e) => {
          const pos = e.target.getLatLng();
          setLat(pos.lat);
          setLng(pos.lng);
          reverseGeocode(pos.lat, pos.lng).then(addr => setLocation(addr));
        } }}
        icon={L.icon({ iconUrl: 'https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon.png', iconSize: [25, 41], iconAnchor: [12, 41] })}
      />
    ) : null;
  }

  return (
    <div className={`plant-tree-detail-bg ${themeClasses[config.theme]}`}>
      <div style={{
        position: 'absolute',
        top: 90,
        right: 48,
        zIndex: 10,
        fontWeight: 600,
        fontSize: '1.05rem',
        color: '#222',
        display: 'flex',
        alignItems: 'center',
        gap: 6,
        background: 'none',
        boxShadow: 'none',
        borderRadius: 0,
        padding: 0
      }}>
        <span role="img" aria-label="coin" style={{fontSize: '1.1rem'}}>🪙</span>
        <span>Total: {totalCoins} coins</span>
      </div>
      <div className="plant-tree-detail-container">
        <div className="plant-tree-detail-left">
          <h1 className="plant-tree-title">{config.title}</h1>
          <p className="plant-tree-green-desc">{config.description}</p>
          <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 12 }}>
            <span style={{ fontSize: '2rem' }} role="img" aria-label="streak">🔥</span>
            <span style={{ fontWeight: 600, fontSize: '1.1rem' }}>Streak: {streak}</span>
            <span style={{ fontWeight: 500, color: '#388e3c', fontSize: '1rem', marginLeft: 12 }}>
              {timerActive && submitted ? `Next activity in: ${formatTime(timeLeft)}` : 'You can post a new activity!'}
            </span>
          </div>
          <div style={{
            fontWeight: 500,
            fontSize: '1rem',
            display: 'flex',
            alignItems: 'center',
            gap: 8,
            marginBottom: 18,
            marginTop: 0,
            alignSelf: 'center',
            margin: '0 auto',
            background: 'none',
            boxShadow: 'none',
            borderRadius: 0,
            padding: 0
          }}>
            <span role="img" aria-label="coin" style={{fontSize: '1.2rem'}}>🪙</span>
            <span>Reward: {reward} coins</span>
          </div>
          <div className="plant-tree-btn-row">
            <button
              className="plant-tree-btn"
              onClick={() => {
                if (timerActive && submitted) {
                  setShowSummaryPopup(true);
                } else {
                  setShowUploadForm(true);
                }
              }}
              disabled={timerActive && submitted}
            >
              {config.button}
            </button>
            <button className="plant-tree-btn plant-tree-btn-cancel" onClick={() => {
              setSubmitted(false);
              setShowUploadForm(false);
              setShowSummaryPopup(false);
              setSpecies('');
              setMedia(null);
              setMediaInfo(null);
              setLocation('');
              setTime('');
              setDate('');
              setTimerActive(false);
              setTimeLeft(0);
              setStreak(0);
              setPlantsPlanted('');
              setWasteWeight('');
              setWasteUnit('kg');
              setEcoDistance('');
              setEcoDistanceUnit('km');
              setPlasticAction('');
              setTotalCoins((prev) => {
                const newTotal = Math.max(0, prev - reward);
                localStorage.setItem('totalCoins', newTotal);
                return newTotal;
              });
              setReward(0);
              const state = {
                submitted: false,
                reward: 0,
                timerActive: false,
                timeLeft: 0,
                endTimestamp: null,
                streak: 0,
                species: '',
                mediaInfo: null,
                location: '',
                time: '',
                date: '',
                wasteWeight: '',
                wasteUnit: 'kg',
                ecoDistance: '',
                ecoDistanceUnit: 'km',
                plasticAction: '',
                plantsPlanted: '',
              };
              localStorage.setItem(getActivityStateKey(), JSON.stringify(state));
            }} disabled={!submitted}>Cancel Submission</button>
          </div>
        </div>
        <div className="plant-tree-detail-right">
          <div className="plant-tree-bg-shape"></div>
          <div className="plant-tree-bubble bubble1" />
          <div className="plant-tree-bubble bubble2" />
          <div className="plant-tree-bubble bubble3" />
          <div className="plant-tree-bubble bubble4" />
          <img src={config.image} alt={config.title} className="plant-tree-img-on-bg" />
        </div>
      </div>
      {showSummaryPopup && (
        <div className="plant-tree-modal-overlay">
          <div className="plant-tree-modal">
            <button className="plant-tree-modal-close" onClick={() => setShowSummaryPopup(false)}>&times;</button>
            <h2>Last Completed Submission</h2>
            <div><strong>{config.speciesLabel}:</strong> {species}</div>
            {activityKey === 'plant-tree' && (
              <div><strong>Plants Planted:</strong> {plantsPlanted}</div>
            )}
            {activityKey === 'clean-up' && (
              <div><strong>Weight Cleaned:</strong> {wasteWeight} {wasteUnit}</div>
            )}
            {activityKey === 'eco-commute' && (
              <div><strong>Distance Travelled:</strong> {ecoDistance} {ecoDistanceUnit}</div>
            )}
            {activityKey === 'plastic-free' && (
              <div><strong>Plastic-Free Action:</strong> {plasticAction}</div>
            )}
            <div><strong>Date:</strong> {date}</div>
            <div><strong>Time:</strong> {time}</div>
            <div><strong>Location:</strong> {location}</div>
            {media && media.type && media.type.startsWith('image') && (
              <img src={URL.createObjectURL(media)} alt="Proof" className="plant-tree-upload-preview" />
            )}
            {media && media.type && media.type.startsWith('video') && (
              <video src={URL.createObjectURL(media)} controls className="plant-tree-upload-preview" style={{maxHeight: 180}} />
            )}
            <div style={{marginTop: '18px'}}>
              <button className="plant-tree-btn" onClick={() => setShowSummaryPopup(false)}>Close</button>
            </div>
          </div>
        </div>
      )}
      {showUploadForm && (!submitted || !timerActive) && (
        <div className="plant-tree-modal-overlay">
          <div className="plant-tree-modal">
            <h2>Upload Proof</h2>
            <form className="plant-tree-modal-form" onSubmit={handleSubmit}>
              <label>{config.speciesLabel}:
                <select value={species} onChange={e => setSpecies(e.target.value)} required>
                  <option value="" disabled>Select</option>
                  {config.speciesOptions.map(s => <option key={s} value={s}>{s}</option>)}
                </select>
              </label>
              {activityKey === 'plant-tree' && (
                <label>How many plants did you plant?
                  <input
                    type="number"
                    min="1"
                    step="1"
                    value={plantsPlanted}
                    onChange={e => setPlantsPlanted(e.target.value)}
                    placeholder="Enter number"
                    required
                  />
                </label>
              )}
              <label>Upload Image/Video:
                <input type="file" accept="image/*,video/*" onChange={handleMediaChange} required />
              </label>
              {lat && lng && (
                <div style={{ height: 200, width: '100%', margin: '10px 0' }}>
                  <MapContainer center={[lat, lng]} zoom={16} style={{ height: '100%', width: '100%' }} scrollWheelZoom={true}>
                    <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                    <LocationMarker lat={lat} lng={lng} setLat={setLat} setLng={setLng} setLocation={setLocation} />
                  </MapContainer>
                  <div style={{ fontSize: '0.95rem', color: '#388e3c', marginTop: 4 }}>Drag the marker if needed to adjust the exact location.</div>
                </div>
              )}
              {activityKey === 'clean-up' && (
                <label>How much weight of waste is cleaned?
                  <div style={{ display: 'flex', gap: 8 }}>
                    <input
                      type="number"
                      min="0"
                      step="any"
                      value={wasteWeight}
                      onChange={e => setWasteWeight(e.target.value)}
                      placeholder="Enter weight"
                      required
                      style={{ flex: 3, minWidth: 0 }}
                    />
                    <select value={wasteUnit} onChange={e => setWasteUnit(e.target.value)}
                      style={{ flex: 1, maxWidth: 80, minWidth: 50 }}>
                      <option value="kg">kg</option>
                      <option value="g">grams</option>
                    </select>
                  </div>
                </label>
              )}
              {activityKey === 'eco-commute' && (
                <label>How much distance did you travel by eco-commute?
                  <div style={{ display: 'flex', gap: 8 }}>
                    <input
                      type="number"
                      min="0"
                      step="any"
                      value={ecoDistance}
                      onChange={e => setEcoDistance(e.target.value)}
                      placeholder="Enter distance"
                      required
                      style={{ flex: 3, minWidth: 0 }}
                    />
                    <select value={ecoDistanceUnit} onChange={e => setEcoDistanceUnit(e.target.value)}
                      style={{ flex: 1, maxWidth: 80, minWidth: 50 }}>
                      <option value="km">km</option>
                      <option value="m">m</option>
                    </select>
                  </div>
                </label>
              )}
              {activityKey === 'plastic-free' && (
                <label>Describe your plastic-free action:
                  <input
                    type="text"
                    value={plasticAction}
                    onChange={e => setPlasticAction(e.target.value)}
                    placeholder="E.g. Used a cloth bag at the store"
                    required
                  />
                </label>
              )}
              <label>Date:
                <input type="date" value={date} onChange={e => setDate(e.target.value)} required />
              </label>
              <label>Location:
                <input type="text" value={location} onChange={e => setLocation(e.target.value)} placeholder="Enter location" required readOnly />
              </label>
              {duplicateTreeError && <div style={{ color: 'red', marginBottom: 8 }}>{duplicateTreeError}</div>}
              <label>Time:
                <input type="time" value={time} onChange={e => setTime(e.target.value)} required />
              </label>
              <button type="submit" className="plant-tree-btn">Submit</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ActivityDetail;
