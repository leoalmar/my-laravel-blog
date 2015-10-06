<div class="row">
	
	<div class="col-xs-12 col-sm-10 col-sm-offset-1 col-md-8 col-md-offset-2 col-lg-6 col-lg-offset-3 ">

		<div class="panel panel-default">	

			<div class="panel-heading">
				<h3 class="panel-title"><i class="fa fa-fw fa-lg fa-sign-in"></i> LOGIN</h3>
			</div>

			<div class="panel-body">

				<form ng-submit="submitForm(form)" name="form"  novalidate="novalidate" >
					<div class="panel-body">
						<div class="row">
							<div class="form-group col-xs-12">
								<label for="email" class="label-control">Email</label>
								<input name="email" id="email" ng-model="user.email" type="email" class="form-control" required="required" >
							</div>
						</div>
						<div class="row">
							<div class="form-group col-xs-8">
								<label for="password" class="label-control">Password</label>
								<input name="password" id="password" ng-model="user.password" type="password" class="form-control" required="required" >
							</div>
							<div class="form-group col-xs-4">								
								<label for="" class="label-control">&nbsp;</label>
								<button ng-disabled="loading" class="btn btn-primary btn-block" type="submit">
									<i class="fa fa-fw" ng-class="{ 'fa-sign-in' : !loading, 'fa-spinner fa-spin' : loading }"></i> <strong>Login</strong>
								</button>
							</div>
						</div>
					</div>
				</form>
				
			</div>
		</div>
	</div>
</div>