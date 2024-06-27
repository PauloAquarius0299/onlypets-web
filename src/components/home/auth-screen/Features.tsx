import UnderlinedText from '@/components/decorators/UnderlinedText';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import React from 'react'

interface FeatureProps {
	title: string;
	description: string;
	image: string;
}

const features: FeatureProps[] = [
	{
		title: "Dicas especializadas em cuidados com animais",
		description:
			"Aprenda as melhores práticas para manter seus pets saudáveis ​​e felizes. Desde conselhos nutricionais até cuidados pessoais.",
		image: "/gifs/gif1.gif",
	},
	{
		title: "Técnicas de treino",
		description:
			"Aprimore suas habilidades com nossos tutoriais detalhados. Quer você goste de adestramento, treino ou apenas alimentação casual, encontre técnicas em segundos",
		image: "/gifs/gif2.gif",
	},
	{
		title: "Vida diaria de um Pet",
		description: "Veja como cuidamos dos nossos pets, administramos a fazenda e apreciamos a beleza da natureza.",
		image: "/gifs/gif4.gif",
	},
];

const featureList: string[] = [
	"Insights sobre a saúde dos animais",
	"Dicas Diárias",
	"Acesso aos bastidores",
	"Tutoriais de treinamento",
	"Dicas saudaveis",
	"Conselhos sobre cuidados com pets",
];

const Features = () => {
  return (
    <section className='container py-24 sm:py-32 space-y-8'>
        <h2 className='text-3xl lg:text-4xl font-bold md:text-center'>
            Somente na <UnderlinedText className='underline-offset-8 decoration-wavy'>OnlyPets</UnderlinedText> Featured 🐵
        </h2>

        <div className='flex flex-wrap md:justify-center gap-4'>
            {featureList.map(feature => (
                <div key={feature}>
                    <Badge className='text-sm' variant={"secondary"}>
                        {feature}
                    </Badge>
                </div>
            ))}
        </div>

        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {features.map(({title,description,image}) => (
                <Card key={title}>
                    <CardHeader>
                        <CardTitle>
                            {title}
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        {description}
                    </CardContent>
                    <CardFooter className='mt-auto'>
                        <img src={image} alt='feature item'
                        className='rounded w-[250px] h-32 lg:w-[300px] mx-auto select-none pointer-events-none'
                        />
                    </CardFooter>
                </Card>
            ))}
        </div>
    </section>
  )
}

export default Features