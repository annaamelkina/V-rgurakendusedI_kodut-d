<?php include("header.php"); ?>
<?php include("menyy.php"); ?>
	
	<?php include("menyy.php"); ?>
		
		<form method="post" action="vorm.php">
	
		<table class="tabel">
			<caption>Sisselogimimise vorm</caption>
			
			<tr>
				<th>
					<label for="username-id">Kasutajanimi:</label>
				</th>
				<td>
					<input type="text" name="username" id="username-id" placeholder="Kirjuta siia kasutajanimi">
				</td>
			</tr>
			
			<tr>
				<th>
					<label for="password-id">Parool:</label>
				</th>
				<td>
					<input type="password" name="password" id="password-id" placeholder="Sisesta siia parool">
				</td>
			</tr>
			
			<tr>
				<td colspan="2">
					<label>
						<input type="checkbox" name="remember_me" value="test">
						Pea mind meeles
					</label>
				</td>
			</tr>
			
			<tr>
				<td colspan="2">
					<button type="submit">Logi sisse</button>	
				</td>
			</tr>
			
		</table>
		
		</form>
	
	<?php include("footer.php"); ?>
