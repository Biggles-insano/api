const API_BASE_URL = "http://localhost:3000";


async function fetchIncidents() {
  try {
    const response = await fetch(`${API_BASE_URL}/incidents`);
    const incidents = await response.json();
    renderIncidents(incidents);
  } catch (error) {
    console.error("Error al obtener incidentes:", error);
  }
}

function renderIncidents(incidents) {
  const container = document.getElementById("incidentsContainer");
  container.innerHTML = ""; 

  incidents.forEach(incident => {
    const div = document.createElement("div");
    div.className = "incidente";
    div.innerHTML = `
      <strong>ID:</strong> ${incident._id}<br>
      <strong>Reportero:</strong> ${incident.reporter}<br>
      <strong>Descripción:</strong> ${incident.description}<br>
      <strong>Status:</strong> ${incident.status}<br>
      <strong>Fecha:</strong> ${new Date(incident.created_at).toLocaleString()}<br>
      <button onclick="deleteIncident('${incident._id}')">Eliminar</button>
      <select onchange="updateStatus('${incident._id}', this.value)">
        <option value="">Actualizar status</option>
        <option value="pendiente">Pendiente</option>
        <option value="en proceso">En proceso</option>
        <option value="resuelto">Resuelto</option>
      </select>
    `;
    container.appendChild(div);
  });
}


async function createIncident(event) {
  event.preventDefault(); 
  const reporter = document.getElementById("reporter").value;
  const description = document.getElementById("description").value;

  try {
    const response = await fetch(`${API_BASE_URL}/incidents`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ reporter, description })
    });
    if (!response.ok) throw new Error("Error en la creación del incidente");
    const newIncident = await response.json();
    console.log("Incidente creado:", newIncident);
    fetchIncidents(); 
  } catch (error) {
    console.error("Error:", error);
  }
}

async function updateStatus(incidentId, newStatus) {
  if (!newStatus) return; 
  try {
    const response = await fetch(`${API_BASE_URL}/incidents/${incidentId}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status: newStatus })
    });
    if (!response.ok) throw new Error("Error al actualizar el estado");
    const updatedIncident = await response.json();
    console.log("Incidente actualizado:", updatedIncident);
    fetchIncidents(); 
  } catch (error) {
    console.error("Error:", error);
  }
}

async function deleteIncident(incidentId) {
  try {
    const response = await fetch(`${API_BASE_URL}/incidents/${incidentId}`, {
      method: "DELETE"
    });
    if (!response.ok) throw new Error("Error al eliminar el incidente");
    const result = await response.json();
    console.log(result.message);
    fetchIncidents(); 
  } catch (error) {
    console.error("Error:", error);
  }
}

document.getElementById("formIncidente").addEventListener("submit", createIncident);

fetchIncidents();
