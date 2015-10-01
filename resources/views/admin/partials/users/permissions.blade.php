<div class="row">
	<div class="col-sm-12">
		<h5>
			<img alt="{{ user.user.first_name }}" ng-src="{{ getImage( user.user.image ? 'users/'+user.user.image : 'admin/user.png' ,40,40,['crop']) }}" class="img-circle" />
			{{ user.user.first_name }} 	{{ user.user.last_name }}
		</h5>
	</div>
</div>
<div class="space-20"></div>

<div class="panel panel-default">	
	<table class="table table-hover table-striped vertical-align">
		<thead>				
			<tr>
				<th>Grupo</th>
				<th>Permissões</th>
				<th style="width:100px;" class="text-center">Permissão</th>
			</tr>
		</thead>
		<tbody>
			<tr ng-repeat="(index,group) in user.groups">
				<td>
					<strong>{{ group.name }}</strong></br>
				</td>
				<td>
					<span class="" ng-repeat="(key,permission) in group.permissions" >{{ key }}{{ !$last? ",":"" }} </span>
				</td>
				<td class="text-center">
					<input type="checkbox" ng-disabled="user.user.id == 1" ng-checked="{{ hasGroup(group.id) }}" ng-model="groups[group.id]" ng-click="switchGroup(group.id)" >
				</td>
			</tr>
		</tbody>
	</table>
</div>