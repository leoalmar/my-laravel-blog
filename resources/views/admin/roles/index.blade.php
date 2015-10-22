<div class="panel panel-default">
	<table class="table table-hover table-striped vertical-align">
		<thead>				
			<tr>
				<th>Roles</th>
				<th style="width:150px;" class="text-center">Opções</th>
			</tr>
		</thead>
		<tbody>
			<tr ng-repeat="(index,role) in roles">
				<td>
					<strong>{{ role.name }}</strong>
				</td>
				<td class="text-center">
					<button class="btn btn-sm btn-primary" ui-sref="role({id:role.id})" bs-tooltip="{ title: 'Edit role data' }" ><i class="fa fa-fw fa-pencil"></i></button>
					<button class="btn btn-sm btn-danger" 
							bs-tooltip="{ title: 'Delete Role'}" 
							bs-modal="{title:'Delete Role',buttons:{ok:{label:'Delete Role',params:{function:'delete',data:role}}}}" >
						<i class="fa fa-fw fa-trash"></i>
					</button>
				</td>
			</tr>
		</tbody>
	</table>
</div>