<!DOCTYPE html>
	<head>
		<meta charset="utf-8">
	    <meta name="viewport" content="width=device-width, initial-scale=1">
	    <title>ideaDB | thejyk</title>
	    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.8.0/css/bulma.min.css">
	    <script defer src="https://use.fontawesome.com/releases/v5.3.1/js/all.js"></script>

	    <!-- google fonts -->
	    <link href="https://fonts.googleapis.com/css?family=Josefin+Sans|Quicksand&display=swap" rel="stylesheet">

	    <style>
	    	html, body {
	    		height: 100%;
	    	}

	    	body {
	    		display: flex;
	    		flex-direction: column;
	    	}

	    	.main-body {
	    		flex: 1 0 auto;
	    	}

	    	.footer {
	    		flex-shrink: 0;
	    	}

	    	.josefin-sans {
	    		font-family: 'Josefin Sans', sans-serif;
	    	}

	    	.quicksand {
	    		font-family: 'Quicksand', sans-serif;
	    	}

	    	::selection {
				background: #33d1b1;
				color:white;
			}

			::-moz-selection {
				background: #33d1b1;
				color:white;
			}
			
			input[type=button], input[type=submit], input[type=reset] {
			    font-family: 'Quicksand', sans-serif;
			}
			
	    </style>
	</head>
	
	<body>
		<nav class="navbar is-primary" role="navigation" aria-label="main navigation">
			<div class="container">
				<div class="navbar-brand">
					<h2 class="navbar-item josefin-sans" style="font-size:24px">thejyk</h2>
					<a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarMain">
					     <span aria-hidden="true"></span>
					     <span aria-hidden="true"></span>
					     <span aria-hidden="true"></span>
				    </a>
				</div>

				<div id="navbarMain" class="navbar-menu">
					<div class="navbar-start">
						<a class="navbar-item quicksand">
							Home
						</a>
						<a class="navbar-item quicksand" href="https://thejyk.com/projects">
							Projects
						</a>
						<a class="navbar-item quicksand" href="https://thejyk.com/storage">
							Storage
						</a>
					</div>
				</div>
			</div>
		</nav>

		<div class="main-body">
		    <section class="section">
		        <div class="container">
		            <h4 class="title is-4 josefin-sans">ideaDB</h4>
		            <hr>
		        </div>
		    </section>
		    
		    <div class="container">
		        <h5 class="title is-5 josefin-sans">Login</h5>
		        <form action="planner.php" method="post">
                    <input type="text" name="id">
                    <input type="submit" value="Login">
		        </form>
		        <br>
		        <p class="quicksand">If this is your first time here, type a unique and memorable username into the field. (You can try <code>demo</code> first to get a feel for the UI.)<br>
		        Otherwise, type in your previously used username (case-sensitive).</p><br>
		        <p class="quicksand">Your username is hashed with <code>SHA-2</code> to protect your identity, but all data here is stored as plaintext and should be considered unsafe.</p>
		    </div>
		    
		    <!-- just an empty container for padding -->
		    <div style="padding: 2rem">
		        
		    </div>
		</div>

		<!-- footer -->
		<footer class="footer" style="padding: 4rem 1.5rem 4rem">
			<div class="container">
				<p class="quicksand">Made Feb 17, 2020.</p>
			</div>
		</footer>
		
		<!-- navbar script -->
		<script>
        document.addEventListener('DOMContentLoaded', () => {
        
          // Get all "navbar-burger" elements
          const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
        
          // Check if there are any navbar burgers
          if ($navbarBurgers.length > 0) {
        
            // Add a click event on each of them
            $navbarBurgers.forEach( el => {
              el.addEventListener('click', () => {
        
                // Get the target from the "data-target" attribute
                const target = el.dataset.target;
                const $target = document.getElementById(target);
        
                // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
                el.classList.toggle('is-active');
                $target.classList.toggle('is-active');
        
              });
            });
          }
        
        });
        </script>
	</body>    
</html>