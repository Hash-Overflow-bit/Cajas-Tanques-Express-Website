export interface FAQItem {
  question: string;
  answer: string;
}

/** Shared by the FAQ section and the FAQPage structured data, so they never drift apart. */
export const HOME_FAQS: FAQItem[] = [
  {
    question: "¿Cómo funciona el depósito de $10 para la reserva?",
    answer:
      "El depósito de $10 se procesa de forma 100% segura mediante Square al momento de confirmar su cita en Acuity. Este monto no es un costo extra, sino un anticipo que se descuenta por completo del total de su flete cuando pasamos a recoger sus cajas o tanques.",
  },
  {
    question: "¿Qué debo tener preparado para el día de la recogida?",
    answer:
      "Le recomendamos tener sus cajas debidamente cerradas y selladas con cinta de embalaje resistente en todas sus uniones, y sus tanques cerrados con su aro metálico y seguro. Tenga a mano el nombre completo, teléfono y dirección del destinatario en la República Dominicana.",
  },
  {
    question: "¿Puedo reprogramar o cancelar mi cita de recogida?",
    answer:
      "Sí. Si necesita cambiar el día o la hora, puede hacerlo fácilmente mediante el enlace provisto en su correo de confirmación con al menos 24 horas de antelación, o escribiéndonos directamente por WhatsApp.",
  },
  {
    question: "¿Cómo recibiré la confirmación y recordatorios de mi cita?",
    answer:
      "Inmediatamente después de reservar recibirá un correo electrónico con su comprobante oficial y, mediante nuestro sistema automatizado de mensajería SMS, recibirá recordatorios en su teléfono móvil sobre la llegada del chofer a su dirección.",
  },
  {
    question: "¿Cuáles artículos están prohibidos por aduanas?",
    answer:
      "Por regulaciones aduaneras de Estados Unidos y de la República Dominicana, está terminantemente prohibido incluir armas de fuego, municiones, sustancias químicas corrosivas o inflamables, drogas ilegales o dinero en efectivo.",
  },
  {
    question: "¿Llegan a todas las provincias de República Dominicana?",
    answer:
      "Sí. Contamos con cobertura integral en todo el país: Santo Domingo, Santiago, San Cristóbal, La Vega, Puerto Plata, San Pedro de Macorís, San Juan, Baní, Samaná, Higüey y comunidades rurales.",
  },
];
