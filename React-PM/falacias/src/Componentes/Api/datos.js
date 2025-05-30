const falacias=[
  {
    "type": "Falacia Genética",
    "def": "Criticar algo basándose en su origen",
    "samples":[
      "Pedro debe ser un ingeniero espantoso, en el colegio suspendía mates."
    ]
  },
  {
    "type": "Falacia Del alegato especial",
    "def": "Alusión a una excepción que el oponente supuestamente no puede comprender.",
    "samples":[
      "- No digas palabrotas.\n+ Pero tú dices palabrotas...\n- Ya, pero yo soy tu padre."
    ]
  },
  {
    "type": "Falacia Ad ignorantiam",
    "def": "Defender una idea porque no se puede probar lo contrario.",
    "samples":[
      "Los alienígenas viven entre nosotros.",
      "En formación las cosas se hacen así"
    ]
  },
  {
    "type": "Tu quoque",
    "def": "Desviar la atención sobre una acusación recibida aludiendo a que el otro también la ha cometido.",
    "samples":[
      "¿Maleducado yo? ¡Pues tú nunca das las gracias!"
    ]
  },
  {
    "type": "Petición de principio",
    "def": "Incluir la conclusión del argumento a probar dentro de la premisa.",
    "samples":[
      "Siempre digo la verdad. Por tanto, no te estoy mintiendo."
    ]
  },
  {
    "type": "Ad misericordiam",
    "def": "Apelar a la piedad del otro jugando con su compasión.",
    "samples":[
      "¡No puedo ir a la cárcel, tengo mujer y tres hijos!"
    ]
  },
  {
    "type": "Post hoc ergo propter hoc",
    "def": "La correlación no implica causalidad.",
    "samples":[
      "La desaparición de los piratas provocó el calentamiento global.\n¿No me crees? Mira el gráfico."
    ]
  },
  {
    "type": "Naturalista",
    "def": "Concluir un “ser” a partir de un “debe”.",
    "samples":[
      "Si todos los seres humanos deben ser tratados como iguales, entonces todos somos exactamente iguales."
    ]
  },
  {
    "type": "Falacia Ad hominem",
    "def": "Atacar a la persona en lugar de a sus argumentos.",
    "samples":[
      "¿Vas a comprarte un Tesla? ¡Si conduces fatal!"
    ]
  },
  {
    "type": "De la cuestión compleja",
    "def": "Preguntar presuponiendo algo que no ha sido probado.",
    "samples":[
      "- ¿Qué tal lleva tu novia la carrera?\n+ Mamá, no voy a picar. Ya te he dicho que no tengo novia."
    ]
  },
  {
    "type": "Argumento ad conditionallis",
    "def": "La base del argumento está condicionada y no puede ser probada.\n",
    "samples":[
      "¡EXCLUSIVA! Según algunas fuentes, el Real Madrid podría ficharme mañana."
    ]
  },
  {
    "type": "Ad populum",
    "def": "Si todo el mundo piensa lo mismo, entonces es verdad.",
    "samples":[
      "Galileo no se dejó engañar."
    ]
  },
  {
    "type": "Argumento ad consequentiam",
    "def": "Responder a un argumento refiriéndose a las posibles consecuencias del mismo.",
    "samples":[
      "Ese político no es un corrupto, porque si lo fuese nadie le habría votado."
    ]
  },
  {
    "type": "Argumento de autoridad",
    "def": "Defender algo porque lo ha dicho un experto en la materia.",
    "samples":[
      "En España no habrá más de 2 o 3 casos, lo ha dicho…” Ya sabéis quién."
    ]
  },
  {
    "type": "Argumento desde la falacia",
    "def": "Desacreditar un argumento porque se ha usado una falacia para defenderlo.",
    "samples":[
      "¿Comer sano porque lo dice el médico?\n¡Eso es un argumento de autoridad!\n¡A partir de ahora solo comeré galletas!"
    ]
  },
  {
    "type": "Argumento ad baculum",
    "def": "Apelar a la fuerza o una amenaza para imponer una acción.",
    "samples":[
      "Si no me haces descuento tendré que comprarle a otro proveedor..."
    ]
  },
  {
    "type": "Falacia del falso dilema",
    "def": "Presentar dos puntos de vista como las únicas opciones posibles..",
    "samples":[
      "¿Estás conmigo o contra mí?"
    ]
  },
  {
    "type": "Argumento a silentio",
    "def": "Extraer una conclusión basándose en la falta de evidencia.",
    "samples":[
      "- ¿Sabes bailar?\n+ Sí, pero ahora no me apetece.\n- Eso es porque no sabes."
    ]
  },
  {
    "type": "Falacia del espantapájaros",
    "def": "Malinterpretar a propósito al rival para poder destruirle fácilmente.",
    "samples":[
      "¿No vienes a la cena benéfica? ¡Eres un tacaño insensible!"
    ]
  },
  {
    "type": "Falacia ad antiquitatem",
    "def": "Como siempre se ha hecho de la misma forma, mejor no cambiarlo.",
    "samples":[
      "Si las mujeres trabajan, ¿quién cuidará de los niños?"
    ]
  },
  {
    "type": "Argumento ad nauseam",
    "def": "Defender la veracidad de un enunciado mediante su prolongada reiteración.",
    "samples":[
      "Cuando los nazis estaban a punto de rendirse, J. Goebbels seguía llenando auditorios y convenciendo a los alemanes de que lograrían la victoria."
    ]
  },
  {
    "type": "Falacia de la pista falsa ",
    "def": "Desviar el tema de conversación para encubrir una debilidad.",
    "samples":[
      "¿Calentamiento global? Lo importante ahora es la economía."
    ]
  },
  {
    "type": "Falacia ad novitatem",
    "def": "Afirmar que algo es correcto o mejor por el hecho de ser más moderno.",
    "samples":[
      "La música electrónica es mejor que el rock de los 80."
    ]
  },
  {
    "type": "Falacia ad novitatem",
    "def": "Afirmar que algo es correcto o mejor por el hecho de ser más moderno.",
    "samples":[
      "La música electrónica es mejor que el rock de los 80."
    ]
  },
  {
    "type": "Generalización precipitada",
    "def": "Llegar a una conclusión general a partir de pruebas insuficientes.",
    "samples":[
      "La hermana de mi novio me cae mal, seguro que el resto de su familia también."
    ]
  },
  {
    "type": "Afirmación del consecuente ",
    "def": "Suponer que afirmando el antecedente estamos autorizados a afirmar el consecuente.",
    "samples":[
      "Los estudiantes de arte dibujan bien. Paula dibuja bien, seguro que estudia arte."
    ]
  },
  {
    "type": "Falacia ad crumenam",
    "def": "Defender algo porque es caro o quien lo dice es rico.",
    "samples":[
      "¿Cómo que no te gusta mi vestido? ¡Si me ha costado mil euros!"
    ]
  },
  {
    "type": "Falacia del punto medio",
    "def": "Atribuir credibilidad a una afirmación porque equidista del resto de posturas.",
    "samples":[
      "Pablo dice que el coronavirus te deja calvo. Daniel dice que no.\nDebe ser que el coronavirus hace que se te caiga el pelo, pero no todo."
    ]
  },
  {
    "type": "Falacia del efecto dominó",
    "def": "Encadenar argumentos para llegar a una conclusión lejana.",
    "samples":[
      "Deberías estudiar una carrera. Si no lo haces, nunca encontrarás un trabajo, no podrás ganar dinero y acabarás viviendo debajo de un puente."
    ]
  },
  {
    "type": "Falacia del coste hundido",
    "def": "Seguir invirtiendo por miedo a que el esfuerzo ya realizado sea en vano. ",
    "samples":[
      "Nunca continues una relación que ya no te hace feliz."
    ]
  },
  {
    "type": "Falacia del francotirador",
    "def": "Manipular la información para que conduzca a la conclusión deseada. ",
    "samples":[
      "¿Cómo calificarías este hilo?\n A) Genial\n B) Excelente"
    ]
  }
]

export default falacias