// unlock curser
document.addEventListener("keydown", (event) => {
  if (event.code == "Escape") {
      document.exitPointerLock();
  }
})