app.service('ScenarioSvc', function(){
	return {
		currentStep		: 0,
		actions			: [],
		
		init : function(){
			this.currentStep = 0;
			this.actions.push({ screen : 'questionWhenTax' });
			this.actions.push({ screen : 'aFaireImpot' });
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
			console.warn('ACTION ',this.currentStep, 'HANDLER '+(action.handler?'Y':'N'), 'SCREEN ',action.screen);
			++this.currentStep;
			return action.screen;
		}
	};
});