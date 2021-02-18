<?php
    // check to make sure post id exists
    if (is_null($_POST["id"])) {
        header("Location: https://thejyk.com/projects/planner");
    } elseif (strcmp($_POST["id"], "") == 0) {
        header("Location: https://thejyk.com/projects/planner");
    }
?>

<!DOCTYPE html>
	<head>
		<meta charset="utf-8">
	    <meta name="viewport" content="width=device-width, initial-scale=1">
	    <title>Planner | thejyk</title>
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
		            <h4 class="title is-4 josefin-sans"><?php echo $_POST["id"] ?>'s Planner</h4>
		            <hr>
		        </div>
		    </section>
		    
		    <div class="container">
		        <div class="columns">
		            <div class="column">
		                <h5 class="title is-5 josefin-sans">Weekly</h5>
		                <div style="border: 1px solid lightgray;">
		                    <div class="quicksand" id="weekly-planner" style="padding: 1rem"></div>
		                </div>
		                <br>
		                <div class="columns">
		                    <div class="column">
		                        <form action="post-msg.php" method="post">
                        		    <input type="text" name="message">
                        		    <input type="submit" value="Add">
                        		    <input type="hidden" name="file" value="weekly">
                        		    <input type="hidden" name="id" value="<?php echo $_POST["id"] ?>">
                        		</form>
		                    </div>
		                    <div class="column">
		                        <form action="clear-msg.php" method="post">
                        		    <input type="submit" value="Clear" style="width:100%">
                        		    <input type="hidden" name="file" value="weekly">
                        		    <input type="hidden" name="id" value="<?php echo $_POST["id"] ?>">
                        		</form>
		                    </div>
		                </div>
		            </div>
		            <div class="column">
		                <h5 class="title is-5 josefin-sans">General</h5>
		                <div style="border: 1px solid lightgray;">
		                    <div class="quicksand" id="general-planner" style="padding: 1rem"></div>
		                </div>
		                <br>
            			<div class="columns">
		                    <div class="column">
		                        <form action="post-msg.php" method="post">
                        		    <input type="text" name="message">
                        		    <input type="submit" value="Add">
                        		    <input type="hidden" name="file" value="general">
                        		    <input type="hidden" name="id" value="<?php echo $_POST["id"] ?>">
                        		</form>
		                    </div>
		                    <div class="column">
		                        <form action="clear-msg.php" method="post">
                        		    <input type="submit" value="Clear" style="width:100%">
                        		    <input type="hidden" name="file" value="general">
                        		    <input type="hidden" name="id" value="<?php echo $_POST["id"] ?>">
                        		</form>
		                    </div>
		                </div>
		            </div>
		        </div>
		        <p class="quicksand is-size-6"><a href="index.php" class="has-text-primary">< Back</a></p>
		    </div>
		    <div class="container" style="padding-top: 2rem">
		        <section class="section" style="border: 1px solid lightgray">
    	            <h5 class="title is-5 josefin-sans">Notes</h5>
    	            <p class="quicksand">
    	                <ul>
    	                    <li class="quicksand">Don't use <code>$</code> or <code>;</code> in your to-do lists. If you ever do, clear your list and everything should work fine.</li>
    	                    <li class="quicksand">Although attackers may not be able to connect your lists to your username, they will likely have access to plaintext versions them. Keep your lists free of sensitive information.</li>
    	                </ul>
    	            </p>
    	        </section>
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
		
		<!-- data script -->
		
		<script src="data.js"></script>
		
		<script>
		    window.onload = function() {
		        getWeekly('<?php echo $_POST["id"] ?>');
		        getGeneral('<?php echo $_POST["id"] ?>');
		    }
		</script>
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