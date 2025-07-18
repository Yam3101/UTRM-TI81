const form = document.querySelector("form");
const mensajeDiv = document.getElementById("mensajeUsuario");

form.addEventListener("submit", (e) => {
	e.preventDefault();
	const nombre = document.getElementById("nombre").value;
	const apellidos = document.getElementById("apellidos").value;
	const correo = document.getElementById("correo").value;
	const sexo =
		document.querySelector('input[name="sexo"]:checked')?.value ||
		"No especificado";
	const info = document.getElementById("info").checked ? "Sí" : "No";
	const condiciones = document.getElementById("condiciones").checked
		? "Aceptadas"
		: "No aceptadas";

	const mensaje = `
      <p>✅ <strong>Formulario enviado correctamente</strong></p>
      <p><strong>Nombre:</strong> ${nombre}</p>
      <p><strong>Apellidos:</strong> ${apellidos}</p>
      <p><strong>Correo:</strong> ${correo}</p>
      <p><strong>Sexo:</strong> ${sexo}</p>
      <p><strong>Recibe info:</strong> ${info}</p>
      <p><strong>Condiciones:</strong> ${condiciones}</p>
    `;

	mensajeDiv.innerHTML = mensaje;
	mensajeDiv.classList.remove("hidden");
	mensajeDiv.classList.add("flex", "flex-col", "gap-2");

	// Opcional: ocultar el formulario
	form.classList.add("hidden");
});
