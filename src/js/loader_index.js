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


document.title = collectionInfo.name + ' - Welcome';

document.getElementById("titleH1").innerHTML = indexPageInfo.title.replace('{name}', collectionInfo.name);
document.getElementById("titleH3").innerHTML = indexPageInfo.underTitle;