document.getElementById("cp_name").innerHTML = collectionInfo.name;
if (collectionInfo.socialMedia.discord == "") {
    document.head.insertAdjacentHTML('beforeend', '<style> #social_discord { opacity: 0.5; pointer-events: none; } </style>');
} else document.getElementById("social_discord").href = collectionInfo.socialMedia.discord;
if (collectionInfo.socialMedia.twitter == "") {
    document.head.insertAdjacentHTML('beforeend', '<style> #social_twitter { opacity: 0.5; pointer-events: none; } </style>');
} else document.getElementById("social_twitter").href = collectionInfo.socialMedia.twitter;
if (collectionInfo.socialMedia.instagram == "") {
    document.head.insertAdjacentHTML('beforeend', '<style> #social_instagram { opacity: 0.5; pointer-events: none; } </style>');
} else document.getElementById("social_instagram").href = collectionInfo.socialMedia.instagram;

document.title = collectionInfo.name + ' - Claim';

document.getElementById("titleH2").innerHTML = claimPageInfo.title;
document.getElementById("shortDescription").innerHTML = claimPageInfo.shortDescription;
document.getElementById("longDescription").innerHTML = claimPageInfo.longDescription;

document.getElementById("claimButton").innerHTML = claimPageInfo.claimButtonText;

document.getElementById("badgeImage").src = `./assets/${claimPageInfo.image}`;
document.getElementById("badgeImage").style.borderRadius = claimPageInfo.imageRadius + "px";