document.querySelector("#copyNotice").innerHTML = `&copy; ${new Date().getFullYear()} Carl J. Bialorucki. Rexburg, Idaho.`;
document.getElementById("modifiedNotice").innerHTML = `Last Updated: ${new Date(document.lastModified).toLocaleString()}`;