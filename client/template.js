
module.exports = (vitreum) => {
return `<html>
	<head>
		<link href="//cdnjs.cloudflare.com/ajax/libs/antd/2.11.1/antd.min.css" rel="stylesheet" />
		<link href="//netdna.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" />
		<link href="//fonts.googleapis.com/css?family=Open+Sans:400,300,600,700" rel="stylesheet" type="text/css" />

		${vitreum.head}
		<title>Event Thingie 9000</title>
	</head>
	<body>
		<main id="reactRoot">${vitreum.body}</main>
	</body>
	${vitreum.js}
</html>`;
};