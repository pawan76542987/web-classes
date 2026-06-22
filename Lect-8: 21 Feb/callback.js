// upload file or image

function upload(image, cb) {
	console.log("Image upload started");
    let imageurl;
	setTimeout (() => {
		console.log("Image uploaded");
		const imageUrl = `https://amazonweb.service.s3.bucket/${image}`;
	    cb(imageurl, dbUpload)
	},2500)
}
function compress(imageurl, cb) {
	console.log("Compressed started");
	setTimeout(()=>{
		console.log("Image compressed");
		const compressedUrl = imageurl + "/compress";
		cb(compressedUrl)
	}, 4000);
}
function dbUpload(compressedUrl, cb) {
	console.log("Db upload started");
	setTimeout(()=> {
		console.log("Image stored in db"); 
	}, 2000)
}

upload("https://myimage.com", compress);