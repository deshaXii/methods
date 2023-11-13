function hideIcons() {
  const iconSection = document.querySelectorAll(".yot_icon");
  const di_img = document.getElementById("di_img");
  iconSection.forEach((icon) => {
    icon.style.display = "none";
    di_img.style.display = "none";
  });
}

export default hideIcons;
