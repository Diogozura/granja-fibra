'use client';

import { Button, Container, Divider, Typography } from "@mui/material";
import { useRouter } from "next/navigation";



export default function PoliticaPrivacidade() {
    const router = useRouter();
    return (
        <>
            <head>
                <title>Politica de privacidade - Graja fibra</title>
            </head>
            <Container maxWidth="md" sx={{ py: 6 }}>
                <Typography variant="h4" gutterBottom fontWeight="bold">
                    Política de Privacidade
                </Typography>

                <Typography paragraph>
                    A sua privacidade é importante para nós. É política do <strong>Grajaunet</strong> respeitar a sua privacidade em relação a qualquer informação sua que possamos coletar no site Grajaunet, e outros sites que possuímos e operamos.
                </Typography>

                <Typography paragraph>
                    Solicitamos informações pessoais apenas quando realmente precisamos delas para lhe fornecer um serviço. Fazemos isso por meios justos e legais, com seu conhecimento e consentimento. Também informamos por que estamos coletando e como será usado.
                </Typography>

                <Typography paragraph>
                    Apenas retemos as informações coletadas pelo tempo necessário para fornecer o serviço solicitado. Quando armazenamos dados, protegemos dentro de meios comercialmente aceitáveis para evitar perdas e roubos, bem como acesso, divulgação, cópia, uso ou modificação não autorizados.
                </Typography>

                <Typography paragraph>
                    Não compartilhamos informações de identificação pessoal publicamente ou com terceiros, exceto quando exigido por lei.
                </Typography>

                <Typography paragraph>
                    Nosso site pode ter links para sites externos que não são operados por nós. Esteja ciente de que não temos controle sobre o conteúdo e práticas desses sites e não podemos aceitar responsabilidade por suas respectivas políticas de privacidade.
                </Typography>

                <Typography paragraph>
                    Você é livre para recusar a nossa solicitação de informações pessoais, entendendo que talvez não possamos fornecer alguns dos serviços desejados.
                </Typography>

                <Typography paragraph>
                    O uso continuado de nosso site será considerado como aceitação de nossas práticas em torno de privacidade e informações pessoais. Se você tiver alguma dúvida sobre como lidamos com dados do usuário e informações pessoais, entre em contato conosco.
                </Typography>

                <Divider sx={{ my: 4 }} />

                <Typography variant="h5" gutterBottom fontWeight="bold">
                    Política de Cookies Grajaunet
                </Typography>

                <Typography paragraph>
                    Como é prática comum em quase todos os sites profissionais, este site usa cookies, que são pequenos arquivos baixados no seu computador, para melhorar sua experiência. Esta seção descreve quais informações eles coletam, como as usamos e por que às vezes precisamos armazenar esses cookies.
                </Typography>

                <Typography variant="h6" gutterBottom fontWeight="bold">
                    Como usamos os cookies?
                </Typography>
                <Typography paragraph>
                    Utilizamos cookies por vários motivos, detalhados abaixo. Na maioria dos casos, não existem opções padrão para desativá-los sem impactar a funcionalidade e recursos do site. É recomendável que você aceite todos os cookies caso não tenha certeza.
                </Typography>

                <Typography variant="h6" gutterBottom fontWeight="bold">
                    Desativar cookies
                </Typography>
                <Typography paragraph>
                    Você pode impedir a configuração de cookies ajustando as configurações do seu navegador. Isso pode afetar funcionalidades deste e de outros sites que você visita.
                </Typography>

                <Typography variant="h6" gutterBottom fontWeight="bold">
                    Cookies que definimos
                </Typography>
                <ul>
                    <li><strong>Cookies de conta:</strong> usados para gerenciar inscrições e preferências.</li>
                    <li><strong>Cookies de login:</strong> evitam que você precise se logar repetidamente.</li>
                    <li><strong>Cookies de boletins:</strong> para lembrar se está inscrito ou não.</li>
                    <li><strong>Cookies de pedidos:</strong> essenciais para e-commerce e carrinho de compras.</li>
                    <li><strong>Cookies de formulários:</strong> lembram dados inseridos anteriormente.</li>
                    <li><strong>Cookies de preferências:</strong> guardam preferências visuais e de comportamento.</li>
                </ul>

                <Typography variant="h6" gutterBottom fontWeight="bold">
                    Cookies de Terceiros
                </Typography>
                <Typography paragraph>
                    Este site pode utilizar cookies de terceiros confiáveis como Google Analytics, Google AdSense e parceiros afiliados, com o objetivo de entender melhor a navegação do usuário e oferecer conteúdo e anúncios relevantes.
                </Typography>

                <Divider sx={{ my: 4 }} />

                <Typography variant="h5" gutterBottom fontWeight="bold">
                    Compromisso do Usuário
                </Typography>

                <Typography paragraph>
                    O usuário se compromete a:
                </Typography>
                <ul>
                    <li>Não se envolver em atividades ilegais ou contrárias à boa fé e ordem pública.</li>
                    <li>Não difundir conteúdo de natureza ofensiva ou discriminatória.</li>
                    <li>Não causar danos aos sistemas do Grajaunet ou de terceiros.</li>
                </ul>

                <Divider sx={{ my: 4 }} />

                <Typography variant="h6" gutterBottom fontWeight="bold">
                    Mais informações
                </Typography>

                <Typography paragraph>
                    Esta política é efetiva a partir de <strong>Fevereiro de 2022</strong>. Se tiver dúvidas ou quiser mais informações, entre em contato conosco.
                </Typography>

                <Button
                    variant="contained"
                    color="primary"
                    onClick={() => router.push('/contato')}
                >
                    Entrar em contato
                </Button>
            </Container>
        </>
    )
}