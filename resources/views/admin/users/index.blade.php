<div class="panel panel-default">
	<table class="table table-hover table-striped vertical-align">
		<thead>				
			<tr>
				<th style="width:50px;" class="text-center"></th>
				<th>Usuário</th>
				<th style="width:150px;" class="text-center">Opções</th>
			</tr>
		</thead>
		<tbody>
			<tr ng-repeat="(index,user) in users">
				<td style="width:50px;" class="text-center">
					<img alt="{{ user.first_name }}" ng-src="{{ getImage( user.image ? 'users/'+user.image : 'admin/user.png',30,30,['crop']) }}" class="img-circle" />
				</td>
				<td>
					<strong>{{ user.first_name }} {{ user.last_name }}</strong>
				</td>
				<td class="text-center">
					<button class="btn btn-sm btn-primary" ui-sref="user({id:user.id})" tooltip="Edit user data" ><i class="fa fa-fw fa-pencil"></i></button>
					<button class="btn btn-sm btn-danger" 
							bs-tooltip="{ title: 'Delete User'}" 
							ng-click="modal({
											type:'confirm',
											title:'Delete user',
											content: 'Are you sure you want to delete the User <strong>'+user.first_name+'</strong>?',
											btn:{
												ok:{
													label:'Delete User',
													function:delete,
													data:{
														user:user,
														index:index
													}
												}
											}
										})" >
						<i class="fa fa-fw fa-trash"></i>
					</button>
				</td>
			</tr>
		</tbody>
	</table>
</div>