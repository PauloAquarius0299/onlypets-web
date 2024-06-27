const Footer = () => {
	return (
		<footer className='md:px-8 md:py-0 border-t'>
			<div className='container flex  items-center gap-4 h-24'>
				<p className='text-balance text-center text-sm leading-loose text-muted-foreground md:text-left'>
					Feito por{" "}
					<a
						href='https://paulofrontend.netlify.app/'
						target='_blank'
						rel='noreferrer'
						className='font-medium underline underline-offset-4'
					>
						Mim
					</a>
					. O codico está livre no meu{" "}
					<a
						href='https://github.com/PauloAquarius0299'
						target='_blank'
						rel='noreferrer'
						className='font-medium underline underline-offset-4'
					>
						GitHub
					</a>
					.
				</p>
			</div>
		</footer>
	);
};
export default Footer;