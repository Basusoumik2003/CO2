import { useState } from "react";
import axios from "axios";
import { fetchTreeData } from "../utils/fetchTreeData";
import { fetchTreeUpdates } from "../utils/fetchTreeUpdates";
import { fetchEVData } from "../utils/fetchEVData";
import { fetchEVUpdates } from "../utils/fetchEVUpdates";
import { fetchSolarData } from "../utils/fetchSolarData";
import { fetchSolarUpdates } from "../utils/fetchSolarUpdates";

export default function Home() {
  const [assetType, setAssetType] = useState("tree");
  const [assetId, setAssetId] = useState("");
  const [data, setData] = useState(null);
  const [updates, setUpdates] = useState([]);
  const [txHash, setTxHash] = useState(""); // <-- New state for tx hash

  const [masterForm, setMasterForm] = useState({});
  const handleMasterChange = (e) => {
    setMasterForm({ ...masterForm, [e.target.name]: e.target.value });
  };

  const addMasterEntry = async () => {
    try {
      let url = "";
      if (assetType === "tree") url = "/api/add-tree";
      else if (assetType === "ev") url = "/api/add-ev";
      else if (assetType === "solar") url = "/api/add-solar";

      const res = await axios.post(`http://localhost:5000${url}`, masterForm);
      alert("Master asset added! Tx Hash: " + res.data.txHash);
      setTxHash(res.data.txHash); // Save to state
    } catch (e) {
      alert("Error: " + (e.response?.data?.error || e.message));
    }
  };

  const [updateForm, setUpdateForm] = useState({});
  const handleUpdateChange = (e) => {
    setUpdateForm({ ...updateForm, [e.target.name]: e.target.value });
  };

  const addUpdateEntry = async () => {
    try {
      let url = "";
      if (assetType === "tree") url = "/api/add-tree-update";
      else if (assetType === "ev") url = "/api/add-ev-update";
      else if (assetType === "solar") url = "/api/add-solar-update";

      const res = await axios.post(`http://localhost:5000${url}`, updateForm);
      alert("Update added! Tx Hash: " + res.data.txHash);
      setTxHash(res.data.txHash); // Save to state
    } catch (e) {
      alert("Error: " + (e.response?.data?.error || e.message));
    }
  };

  const fetchData = async () => {
    let master = null, upd = [];
    if (assetType === "tree") {
      master = await fetchTreeData(assetId);
      upd = await fetchTreeUpdates(assetId);
    } else if (assetType === "ev") {
      master = await fetchEVData(assetId);
      upd = await fetchEVUpdates(assetId);
    } else if (assetType === "solar") {
      master = await fetchSolarData(assetId);
      upd = await fetchSolarUpdates(assetId);
    }
    setData(master);
    setUpdates(upd);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Blockchain Service (Add & View)</h1>

      <select value={assetType} onChange={(e) => setAssetType(e.target.value)}>
        <option value="tree">Tree</option>
        <option value="ev">EV</option>
        <option value="solar">Solar</option>
      </select>

      <h2>Add Master Entry</h2>
      <form>
        {assetType === "tree" && (
          <>
            <input name="tid" placeholder="TID" onChange={handleMasterChange} /><br />
            <input name="uid" placeholder="UID" onChange={handleMasterChange} /><br />
            <input name="treeName" placeholder="Tree Name" onChange={handleMasterChange} /><br />
            <input name="botanicalName" placeholder="Botanical Name" onChange={handleMasterChange} /><br />
            <input name="plantingDate" placeholder="Planting Date" onChange={handleMasterChange} /><br />
            <input name="location" placeholder="Location" onChange={handleMasterChange} /><br />
            <input name="imageHashId" placeholder="Image Hash ID" onChange={handleMasterChange} /><br />
            <input name="createdDate" placeholder="Created Date" onChange={handleMasterChange} /><br />
          </>
        )}

        {assetType === "ev" && (
          <>
            <input name="eid" placeholder="EID" onChange={handleMasterChange} /><br />
            <input name="uid" placeholder="UID" onChange={handleMasterChange} /><br />
            <input name="category" placeholder="Category" onChange={handleMasterChange} /><br />
            <input name="manufacturer" placeholder="Manufacturer" onChange={handleMasterChange} /><br />
            <input name="model" placeholder="Model" onChange={handleMasterChange} /><br />
            <input name="purchaseYear" placeholder="Purchase Year" onChange={handleMasterChange} /><br />
            <input name="energyConsumed" placeholder="Energy Consumed" onChange={handleMasterChange} /><br />
            <input name="primaryChargingType" placeholder="Primary Charging Type" onChange={handleMasterChange} /><br />
            <input name="range" placeholder="Range" onChange={handleMasterChange} /><br />
            <input name="gridEmissionFactor" placeholder="Grid Emission Factor" onChange={handleMasterChange} /><br />
            <input name="createdDate" placeholder="Created Date" onChange={handleMasterChange} /><br />
          </>
        )}

        {assetType === "solar" && (
          <>
            <input name="suid" placeholder="SUID" onChange={handleMasterChange} /><br />
            <input name="uid" placeholder="UID" onChange={handleMasterChange} /><br />
            <input name="installedCapacity" placeholder="Installed Capacity" onChange={handleMasterChange} /><br />
            <input name="installationDate" placeholder="Installation Date" onChange={handleMasterChange} /><br />
            <input name="energyGenerationValue" placeholder="Energy Generation Value" onChange={handleMasterChange} /><br />
            <input name="inverterType" placeholder="Inverter Type" onChange={handleMasterChange} /><br />
            <input name="gridEmissionFactor" placeholder="Grid Emission Factor" onChange={handleMasterChange} /><br />
            <input name="createdDate" placeholder="Created Date" onChange={handleMasterChange} /><br />
          </>
        )}
        <button type="button" onClick={addMasterEntry}>Add Master</button>
      </form>

      <h2>Add Update Entry</h2>
      <form>
        {assetType === "tree" && (
          <>
            <input name="tid" placeholder="TID" onChange={handleUpdateChange} /><br />
            <input name="height" placeholder="Height" onChange={handleUpdateChange} /><br />
            <input name="imageHashId" placeholder="Image Hash ID" onChange={handleUpdateChange} /><br />
            <input name="dbh" placeholder="DBH" onChange={handleUpdateChange} /><br />
            <input name="createdDate" placeholder="Created Date" onChange={handleUpdateChange} /><br />
          </>
        )}

        {assetType === "ev" && (
          <>
            <input name="eid" placeholder="EID" onChange={handleUpdateChange} /><br />
            <input name="distance" placeholder="Distance" onChange={handleUpdateChange} /><br />
          </>
        )}

        {assetType === "solar" && (
          <>
            <input name="suid" placeholder="SUID" onChange={handleUpdateChange} /><br />
            <input name="avgMonthlyOutput" placeholder="Avg Monthly Output" onChange={handleUpdateChange} /><br />
            <input name="panelEfficiency" placeholder="Panel Efficiency" onChange={handleUpdateChange} /><br />
            <input name="createdDate" placeholder="Created Date" onChange={handleUpdateChange} /><br />
          </>
        )}
        <button type="button" onClick={addUpdateEntry}>Add Update</button>
      </form>

      {txHash && (
        <div style={{ marginTop: "10px", color: "green" }}>
          ✅ Transaction Hash:{" "}
          <a href={`https://sepolia.etherscan.io/tx/${txHash}`} target="_blank" rel="noopener noreferrer">
            {txHash}
          </a>
        </div>
      )}

      <h2>View Asset Data</h2>
      <input value={assetId} onChange={(e) => setAssetId(e.target.value)} placeholder="Asset ID" />
      <button onClick={fetchData}>Fetch Data</button>

      {data && (
        <div>
          <h3>Master Data</h3>
          <pre>{JSON.stringify(data, null, 2)}</pre>

          <h3>Updates</h3>
          <pre>{JSON.stringify(updates, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}
