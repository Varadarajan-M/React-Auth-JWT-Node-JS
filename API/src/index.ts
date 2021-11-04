import { registerApp } from './app';

const PORT = process.env.PORT || 3000;

const main = async () => {
	const app = await registerApp();

	app.listen(PORT, () => {
		console.log(`Listening on port ${PORT}`);
	});
};

main().catch((e) => console.log('Some error occured', e));
