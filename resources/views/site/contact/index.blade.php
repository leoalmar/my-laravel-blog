<div class="container">


	<div class="panel panel-default">
			
		<div class="panel-heading">
			Example form to Angular Auto Validade
		</div>	
		<div class="panel-body">
			
			<form ng-submit="submitForm(form)" name="form" novalidate="novalidate" >
				<div class="form-group col-md-6">
					<label for="name" class="label-control">Name</label>
					<input type="text" class="form-control" id="name" ng-model="name" required="required" >			
				</div>
				<div class="form-group col-md-6">
					<label for="email" class="label-control">Email</label>
					<input name="email" id="email" ng-model="email" type="email" class="form-control" required="required" >	
				</div>
				<div class="form-group col-md-6">
					<label for="username" class="label-control">Username</label>
					<input type="text" class="form-control" id="username" ng-model="username" ng-pattern="/^[A-Za-z0-9_]{3,15}$/" ng-pattern-err-type="badUsername" required="required" >			
				</div>
				<div class="form-group col-md-6">
					<label for="age" class="label-control">Age</label>
					<input type="number" class="form-control" id="age" ng-model="age"  min="18" max="70" ng-min-err-type="tooYoung" ng-max-err-type="tooOld" required="required" >
				</div>
				<div class="form-group col-md-6">
					<button type="submit" ng-disabled="form.$invalid || loading" class="btn btn-primary"><i class="fa fa-fw fa-paper-plane"></i> Send</button>
				</div>
			</form>

		</div>
	</div>
</div>