app.service('ScenarioSvc', function(){
	return {
		currentStep		: 0,
		actions			: [],
		
		init : function(){
			this.currentStep = 0;
			this.actions.push({ screen : 'questionWhenTax', image:'tax', title:'Imp&ocirc;ts', dice:5 });
			this.actions.push({ screen : 'PEA', image: 'quizz', title: 'Quizz<br />PEA', dice:2 });
			this.actions.push({ screen : 'acheterAppart', image:'house', title:'Immobilier', dice:3 });
			this.actions.push({ screen : 'immo', image:'house', title:'Immobilier', dice:5 });
			this.actions.push({ screen : 'warren', image:'quote', title:'Citation', dice:2 });
			this.actions.push({ handler : function(){ alert('Step 3'); } });
			this.actions.push({ handler : function(){ alert('Step 4'); } });
			this.actions.push({ handler : function(){ alert('Step 5'); } });
			this.actions.push({ handler : function(){ alert('Step 6'); } });
		},
		
		nextAction : function(){
			if (!this.actions[this.currentStep]) return false;
			action = this.actions[this.currentStep];
			
			// Function handler
			if (action.handler) action.handler(this.currentStep);
			
			// Redirect to a screen
			++this.currentStep;
			return action;
		},
		
		getNextDice : function(){
			if (!this.actions[this.currentStep]) return false;
			action = this.actions[this.currentStep];
			return action.dice || false;
		}
	};
});