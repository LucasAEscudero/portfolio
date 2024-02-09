import {
  Html,
  Body,
  Head,
  Heading,
  Hr,
  Container,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import { Tailwind } from "@react-email/tailwind";

type ContactEmailProps = {
  message: string;
  senderEmail: string;
};

export default function ContactFormEmail({
  message,
  senderEmail,
}: ContactEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>Nuevo mensaje de tu portfolio</Preview>
      <Tailwind>
        <Body className="bg-gray-100">
          <Container>
            <Section className="bg-white border-black my-10 px-10 py-4 rounded-md">
              <Heading>
                Has recibido un mensaje de tu formulario de contacto!
              </Heading>
              <Text>{message}</Text>
              <Hr />
              <Text>El correo electrónico del remitente es: {senderEmail}</Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
