const  toggle = (descriptionId) => {
  const description = document.getElementById(descriptionId);
  description.style.display === "none"?
  description.style.display = "block" : description.style.display = "none";
}