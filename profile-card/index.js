function showAvatar(avatar_id, card_id) {
  let avatar_ele = document.getElementById(avatar_id);
  let card_ele = document.getElementById(card_id);

  if (!(avatar_ele.style.width == "100%" && avatar_ele.style.height == "100%")) {
    card_ele.style.padding = "unset";

    avatar_ele.style.width = "100%";
    avatar_ele.style.height = "100%";
    avatar_ele.style.borderRadius = "10px";
  } else {
    card_ele.style.padding = "10px";
    card_ele.style.borderRadius = "10px";

    avatar_ele.style.width = "120px";
    avatar_ele.style.height = "120px";
    avatar_ele.style.borderRadius = "50%";
  }
}