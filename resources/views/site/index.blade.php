<!DOCTYPE html>
<html lang="pt_br">
<head>
	<meta charset="UTF-8">
	<meta name="theme-color" content="#E74430">

	<meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

	<title>My Laravel Blog - The Ultimate Laravel Blog</title>

	[[ Html::style('//maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css') ]]
	[[ Html::style('//maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css') ]]
	[[ Html::style('site/css/app.css') ]]
	
</head>
<body>

	<div id="fb-root"></div>
	<script>(function(d, s, id) {
	  var js, fjs = d.getElementsByTagName(s)[0];
	  if (d.getElementById(id)) return;
	  js = d.createElement(s); js.id = id;
	  js.src = "//connect.facebook.net/pt_BR/sdk.js#xfbml=1&version=v2.4&appId=954795864564426";
	  fjs.parentNode.insertBefore(js, fjs);
	}(document, 'script', 'facebook-jssdk'));</script>

	@yield('content')

	<!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
      <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->

	[[ Html::script('//code.jquery.com/jquery-2.1.4.min.js') ]]
	[[ Html::script('//maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js') ]]
	[[ Html::script('site/js/app.js') ]]

	@if ( Config::get('app.debug') )
	<script>document.write('<script src="http://localhost:35729/livereload.js?snipver=1"></' + 'script>')</script>
	@endif
	
</body>
</html>