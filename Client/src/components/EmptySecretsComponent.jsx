import React from 'react';

const EmptySecretsComponent = () => {
	return (
		<div className='p-4 text-primary text-center'>
			<h5>
				No Secrets yet! <br />{' '}
				<span className='text-secondary'>Maybe add one?</span>
			</h5>
		</div>
	);
};

export default EmptySecretsComponent;
