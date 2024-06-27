import RotatedText from '@/components/decorators/RotatedText';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import React from 'react'

interface TeamProps {
    imageUrl: string;
    name:string;
    position:string;
    description:string;
}

const teamList: TeamProps[] = [
	{
		imageUrl: "https://i.pravatar.cc/150?img=35",
		name: "Sarah Ishikawa",
		position: "Gerente Lead",
		description: "Sarah garante o bom funcionamento do estabelecimento e garante o bem-estar de todos os animais. ",
	},
	{
		imageUrl: "https://i.pravatar.cc/150?img=60",
		name: "Diego Leal",
		position: "Adestrador",
		description: "James é nosso especialista em treinamento de animais e instrução de saude com mais de 15 anos de experiência",
	},
	{
		imageUrl: "https://i.pravatar.cc/150?img=36",
		name: "Dr. Emily Martins",
		position: "Equine Veterinaria",
		description: "Dr. Emily é nossa veterinária residente, dedicado a manter a saúde de nossos pets.",
	},
	{
		imageUrl: "https://i.pravatar.cc/150?img=17",
		name: "Michael Ramirez",
		position: "Veterinario e Cuidador",
		description: "Michael é responsável pelo cuidado diário dos nossos animais, incluindo alimentação e preparação. ",
	},
];

const Team = () => {
  return (
    <section className='container py-24 sm:py-32'>
        <h2 className='text-2xl sm:text-3xl md:text-5xl text-center tracking-tighter font-bold'>
            Nossa <RotatedText>Equipe</RotatedText> profissional
        </h2>

        <p className='mt-4 mb-10 text-md md:text-xl text-muted-foreground text-center'>
        Conheça a equipe que faz da nossa casa um lugar especial para nossos pets
        </p>

        <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8 gap-y-10'>
            {teamList.map(({description,imageUrl,name,position}) => (
                <Card key={name} className='bg-muted/50 relative mt-7 flex flex-col justify-center items-center'>
                    <CardHeader className='my-8 flex justify-center items-center pb-2'>
                        <img src={imageUrl} alt='team members' 
                        className='absolute -top-12 rounded-full w-24 h-24 aspect-square object-cover'
                        />
                        <CardTitle className='text-center'>{name}</CardTitle>
                        <CardDescription className='text-primary'>{position}</CardDescription>
                    </CardHeader>

                    <CardContent className='text-center pb-4 px-2'>
                        <p>{description}</p>
                    </CardContent>
                </Card>
            ))}
        </div>
    </section>
  )
}

export default Team