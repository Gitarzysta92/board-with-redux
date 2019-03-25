export const Tasks = [
	{
		id: '1',
		name: 'TaskName',
		establishDate: 'Date',
		category: 'category',
		taskStatus: {
			type: '',
			updateDate: '',
		},
		businessHours: 'sumOfparicipantsBusinessHours',
		taskOwner: 'userID',
		participants: ['usersIDs'],
		customProps: {},
		taskUpdates: [
			{
				title: 'Update Title',
				text: 'Some custom text',
				author: 'userID',
				updateDate: 'Date type object',
				taskActions: {
					AddbusinessHours: 2
				}
			}
		]
	},
	{
		id: '2',
		name: 'TaskName',
		establishDate: 'Date',
		category: 'category',
		taskStatus: {
			type: '',
			updateDate: '',
		},
		businessHours: 'sumOfparicipantsBusinessHours',
		taskOwner: {
			id: 'userID'
		},
		participants: ['usersIDs'],
		customProps: {},
		taskUpdates: [
			{
				title: 'Update Title',
				text: 'Some custom text',
				author: 'userID',
				updateDate: 'Date type object',
				taskActions: {
					AddbusinessHours: 2
				}
			}
		]
	}
]