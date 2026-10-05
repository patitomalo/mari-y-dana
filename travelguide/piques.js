/* Guía de las novias · piques por zona.
   q = texto que se busca en Google Maps. ig = usuario de Instagram (sin @).
   Fuentes: historias de @priscilabel_ y posts de @lucia_dibello (verano 2025/26). */
window.PIQUES = [
  {
    id: 'punta', zona: 'La Punta', sub: 'Punta del Este · península y puerto',
    lugares: [
      { n: 'Imarangatu Beach', ig: 'imarangatubeach', q: 'Imarangatu Beach Punta del Este', t: 'Parador clásico de la Mansa en parada 7: cocina cuidada, buena música y atardeceres con tragos frente al mar.' },
      { n: 'Parador Posto 5', ig: 'parador_posto5', q: 'Posto 5 Punta del Este', t: 'Beach club relajado en la Mansa: pescados, mariscos y tragos, ideal para almorzar largo y quedarte hasta el atardecer.' },
      { n: 'Muelle 3', ig: 'muelle3.pde', q: 'Muelle 3 Punta del Este', t: 'Cocina sobre el mar con vista increíble: tartar de atún, pastas con mariscos y buenos tragos. Reservá, se llena.' },
      { n: 'Baipa Panadería', ig: 'baipapanaderia', q: 'Baipa Panadería Punta del Este', t: 'Cosas dulces, sánguches de miga y el croissant roll de pistacho.' },
      { n: 'El Abasto', ig: 'elabasto.restaurant', q: 'El Abasto Restaurant Punta del Este', t: 'Bodegón, rotisería, cantina. Vermú y croquetas.' },
      { n: 'Burger Time', ig: 'burgertimeuy', q: 'Burger Time Punta del Este', t: 'Cadena uruguaya de hamburguesas con papas con cheddar casero, cerveza y buena música. Rápido y sin vueltas.' },
      { n: 'Francés & Co Pasticceria', ig: 'frances.co.pasticceria', q: 'Francés & Co Pasticceria Punta del Este', t: 'Pastelería franco-italiana con croissants muy elogiados, roll de pistacho y brunch. Chiquito adentro, lindas mesas afuera.' },
      { n: 'Il Porto', ig: 'ilporto.uy', q: 'Il Porto gelato Punta del Este', t: 'El mejor pistacho.' },
      { n: 'Atrevida Pizzería', ig: 'atrevida.pizzeria', q: 'Atrevida Pizzería Punta del Este', t: 'La birra tirada más fría. Planazo.' },
      { n: 'Las Pavas', ig: 'laspavasoficial', q: 'Las Pavas Punta del Este', t: 'Comida casera rica en la península: ñoquis, entraña, cheesecake vasca y pan de su propia panadería. Tranquilo y amable.' },
      { n: 'Vitaminas', ig: 'vitaminas.uy', q: 'Vitaminas café Punta del Este', t: 'Café con vista estupenda. La cookie de limón recién hecha, 10 puntos.' },
      { n: 'Café de la Mansa · Zunino', ig: 'cafedelamansazunino', q: 'Café de la Mansa Zunino Punta del Este', t: 'Divina vista y ambiente. Los cuadraditos de queso de Zunino, el mejor producto.' },
      { n: 'Wantan Cantina China', ig: 'wantancantinachina', q: 'Wantan Cantina China Punta del Este', t: 'Cantina china estilo chifa, dulce, salada y picante: arroz, fideos, sopas y agridulces. Funciona bien al mediodía y de noche.' },
      { n: 'L\'Auberge', ig: 'hotel_l_auberge', q: 'Hotel L\'Auberge Punta del Este', t: 'Waffleeee. Amamos.' },
      { n: 'Chill Out', ig: 'chilloutrestouy', q: 'Chill Out Punta del Este', t: 'Chivitos gourmet, hamburguesas, tacos y limonadas caseras en una terraza frente a Isla Gorriti. Ideal para el atardecer.' },
      { n: 'Misushi', ig: 'misushi', q: 'Misushi Punta del Este', t: 'Sushi fusión a pocas cuadras de la playa, rápido y a buen precio; destacan los rolls veggie y veganos.' },
      { n: 'Pez Globo', ig: 'pezglobodeleste', q: 'Pez Globo Punta del Este', t: 'Sushi y bao bar de noche en la península: rolls, pokes, baos de cerdo, dumplings y ramen con producto fresco.' },
      { n: 'Late Resto', ig: 'lateresto.pde', q: 'Late Resto Punta del Este', t: 'Sushi y fusión peruano-asiática en un lugar chico con patio lindo. Pedí los hot rolls y los arrolladitos al horno.' },
      { n: 'Picniquería', ig: 'picniqueria', q: 'Picniquería Punta del Este', t: 'Sándwiches y almuerzos ricos para llevar o comer ahí, con buen café y boutique gourmet de aceites y vinos.' },
      { n: 'Boulevard de las Palmeras', ig: 'boulevarddelaspalmeras', q: 'Boulevard de las Palmeras Punta del Este', t: 'Casona restaurada a metros del puerto: parrilla de carnes y pescados frescos, cocina a la vista y carta de vinos.' },
      { n: 'Gozar', ig: 'gozarpde', q: 'Gozar Punta del Este', t: 'Hamburguesas y ensaladas de autor del chef de Imarangatú, con DJ y onda urbana. Abre del mediodía a medianoche.' },
      { n: 'Floreal', ig: 'florealrestaurante', q: 'Floreal Restaurante Punta del Este', t: 'Clásico de décadas en el bosque de San Rafael: cocina internacional de autor, elegante, para una cena especial.' },
      { n: 'Teodoro', ig: 'teodoro_pde', q: 'Teodoro Punta del Este', t: 'Parrilla con carnes muy bien hechas y buena carta de vinos en Pedragosa Sierra; sirve para almuerzo o cena.' },
      { n: '481 Gourmet', ig: '481gourmet', q: '481 Gourmet Punta del Este', t: 'Parrilla moderna con carnicería boutique: entraña, bife ancho y cordero de primera, guarniciones ricas. Reservá, es chico.' },
      { n: 'Bymora Sushi', ig: 'bymorasushi', q: 'Bymora Sushi Punta del Este', t: 'Sushi bar informal y acogedor, de noche, con tragos y opción de take away. Va bien con amigos o familia.' },
      { n: 'Virazón', ig: 'virazon.restoran', q: 'Virazón Punta del Este', t: 'Clásico del puerto frente al mar con carta amplísima: chivito, salmón a la parrilla, temaki. Ideal para ver el atardecer.' },
      { n: 'Shark Club', ig: 'sharkclub.uy', q: 'Shark Club Punta del Este', t: 'Terraza enorme sobre la Mansa con vista a Isla Gorriti, platos abundantes, coctelería y opción kosher. Lindo con amigos.' },
      { n: 'Mi Piace', ig: 'mipiacepde', q: 'Mi Piace Punta del Este', t: 'Passsta.' },
      { n: 'Zazú Puerto', ig: 'zazupuerto', q: 'Zazú Puerto Punta del Este', t: 'Tienen suspiro limeño.' },
      { n: 'Rústico Bar', ig: 'rusticbarpde', q: 'Rústico Bar Punta del Este', t: 'Resto bar acogedor de ladrillo y madera, precios amigables y porciones generosas: chivito, milanesa y lasaña.' },
      { n: 'Casa Proa', ig: 'casa.proa', q: 'Casa Proa Punta del Este', t: 'Tapeo y tragos de autor en una casa con cinco rincones distintos, onda joven. Para picar algo de noche.' },
      { n: 'Olivia', ig: 'olivia.resto', q: 'Olivia Resto Punta del Este', t: 'Lugar luminoso con precios razonables para Punta: tacos, ensaladas, sándwiches, pescados y limonada de jengibre. Terraza con vista al puerto.' },
      { n: 'Malafama', ig: 'malafama_puntadeleste', q: 'Malafama Punta del Este', t: 'Cervecería artesanal con pizzas de masa madre grandes para compartir, sours y limonada de menta y jengibre. Buen patio.' },
      { n: 'Capi Bar', ig: 'capi_bar', q: 'Capi Bar Punta del Este', t: 'Bar de cervezas artesanales abierto todo el año, con música en vivo los findes. Probá la blue cheese burger.' },
      { n: 'Hivi Pizza', ig: 'hivipizza', q: 'Hivi Pizza Punta del Este', t: 'Pizzería de la zona; no encontramos reseñas confiables, así que andá a probar y contanos.' },
      { n: 'Olaf Parador', ig: 'olafparador', q: 'Olaf Parador Punta Ballena', t: 'Parador de verano en Punta Ballena con vista al mar: mariscos, parrilla y opciones veggie, más jazz al atardecer.' }
    ]
  },
  {
    id: 'barra', zona: 'La Barra', sub: 'Del puente para allá',
    lugares: [
      { n: 'Rizar Empanadas', ig: 'rizar.empanadas', q: 'Rizar Empanadas La Barra', t: '¿Las mejores empanadas del universo? Sí. Horno de leña.' },
      { n: 'Café El Tesoro', ig: 'cafe_eltesoro', q: 'Café El Tesoro La Barra', t: 'Café restó tranquilo con panes y pastelería caseros, brunch tardío y almuerzos frescos; ideal al volver de la playa.' },
      { n: 'Amoreira', ig: 'amoreira.pde', q: 'Amoreira La Barra', t: 'Rincón íntimo a luz de velas entre plantas, solo en temporada; pedí el ceviche o los agnolotti y reservá.' },
      { n: 'Estero Estero', ig: 'esteroestero', q: 'Estero Estero La Barra', t: 'Vinería con bistró y tienda de vinos, de miércoles a sábado desde las 19; ideal para una copa tranquila.' },
      { n: 'Ola Poke', ig: 'olapoke.uy', q: 'Ola Poke La Barra', t: 'Pokería donde armás tu bowl a gusto, con salmón, atún, pulpo o tofu; rápido, fresco y apto celíacos.' },
      { n: 'Misushi La Barra', ig: 'misushi', q: 'Misushi La Barra', t: 'Sushi y cocina nikkei con rolls, pokes y menú del mediodía; servicio rápido y buenas opciones veggie.' },
      { n: 'Gualicho', ig: 'gualicholabarra', q: 'Gualicho La Barra', t: 'Cocina mestiza con tapas creativas, ceviches y tatakis en Ruta 10; abre solo en temporada, vale la pena.' },
      { n: 'El Chancho y la Coneja', ig: 'elchanchoylaconeja', q: 'El Chancho y la Coneja La Barra', t: 'Los ñoquis gratinados.' },
      { n: 'Legua', ig: 'legua_labarra', q: 'Legua La Barra', t: 'Bao y dumplings. Una experiencia.' },
      { n: 'La Roti (ex Puertas Violetas)', ig: '', q: 'La Roti La Barra', t: 'Rotisería de barrio con comida para llevar; buena opción para resolver una cena sin cocinar.' },
      { n: 'La Clave cocina árabe', ig: 'la_clave_cocina_arabe', q: 'La Clave Cocina Árabe La Barra', t: 'Cocina libanesa de familia: lehmeyun, shawarma, falafel, hummus y baklawá, también congelados para llevar a casa.' },
      { n: 'Alison Cakes Café', ig: 'alison.cakes.cafe', q: 'Alison Cakes Café La Barra', t: 'La cookie y la carrot cake.' },
      { n: 'Alison Pizza', ig: 'alison.pizza', q: 'Alison Pizza La Barra', t: 'Nuestra pizza fav.' },
      { n: 'Portal Bosque', ig: 'portalbosque', q: 'Portal Bosque La Barra', t: 'Club familiar en el bosque con juegos para chicos, música en vivo y el restó Tierra de producto local.' },
      { n: 'Alma', ig: 'alma_labarra', q: 'Alma La Barra', t: 'Comida rica y natural con sándwiches y productos de mercado; están en pausa, chequeá en Instagram si reabrieron.' },
      { n: 'Mahalo Bowls', ig: 'mahalobowls', q: 'Mahalo Bowls La Barra', t: 'Bowls de açaí, smoothies y sándwiches frescos con terraza y vista; pedí el de espirulina azul al atardecer.' },
      { n: 'Borneo Coffee', ig: 'borneocoffee.uy', q: 'Borneo Coffee La Barra', t: 'EL café de La Barra. El chipa pan de queso.' },
      { n: 'Deliss', ig: '', q: 'Deliss La Barra', t: 'Hamburguesería sobre Ruta 10 para resolver algo rápido e informal después de la playa.' },
      { n: 'Rex', ig: 'rexbestchivitointown', q: 'Rex La Barra', t: 'Chivitos.' },
      { n: 'Locanda', ig: 'locandapunta', q: 'Locanda La Barra', t: 'Resort nuevo del Grupo Cipriani con lobby lounge, cocina todo el día y Harry\'s Table italiano; plan elegante.' },
      { n: 'El Popu · Natural y Popular', ig: 'naturalypopular', q: 'El Popu La Barra', t: 'Así se llama en Instagram El Popu: cantina vegetariana en Ruta 10 con café de especialidad, vino y música.' },
      { n: 'La Washington Pulpería', ig: 'lawashingtonpulperia', q: 'La Washington Pulpería La Barra', t: 'Bao bun y tomar algo.' },
      { n: 'Narbona', ig: 'narbonapde', q: 'Narbona La Barra', t: 'Restó de campo con pastas, quesos propios y asado, abre de día jueves a domingo; pedí la tabla de quesos.' },
      { n: 'Al Fin y Al Cabo', ig: 'alfinyalcabouy', q: 'Al Fin y Al Cabo Montoya', t: 'Parrilla con terraza sobre el mar y mesa de pool, inspirada en el mítico bar de Cabo Polonio; también eventos.' },
      { n: 'Casablanca', ig: 'casablanca.punta', q: 'Casablanca Punta parador', t: 'Parador de playa del Grupo Cipriani con pizzas, parrilla, sushi y música al atardecer; abre solo en verano.' },
      { n: 'Suki', ig: 'suki._______', q: 'Suki La Barra', t: 'Local gastronómico de La Barra; conviene chequear horarios y propuesta en Instagram antes de ir.' },
      { n: 'Dandy Cocina', ig: 'dandycocina', q: 'Dandy Cocina La Barra', t: 'Cocina honesta argentina en La Posta del Cangrejo: pescados, carnes y ensaladas gourmet, con deck y sunsets con DJ.' },
      { n: 'Pura Vida', ig: 'puravidalabarra', q: 'Pura Vida La Barra', t: 'Lugar cálido con balcón al mar, pastas y mariscos; el crepe de langostinos es el clásico, ideal para almorzar.' },
      { n: 'Hoy', ig: 'hoy________', q: 'Hoy café La Barra', t: 'Cafetería totalmente sin gluten, con panes, sándwiches, hamburguesas y tortas; un alivio para celíacos de merienda.' },
      { n: 'Via Pizza', ig: 'via.pizza', q: 'Via Pizza La Barra', t: 'Pizzas a pedido con masa común, integral o sin gluten y fainá crocante; precios amables, muy familiar, solo efectivo.' },
      { n: 'Pico Alto', ig: '', q: 'Pico Alto La Barra', t: 'Clásico barcito de La Barra con pizza, fainá y chivitos a buen precio; abre hasta tarde, solo efectivo.' },
      { n: 'Capi Bar La Barra', ig: 'capi_bar', q: 'Capi Bar La Barra', t: 'Brewpub con cervezas artesanales propias, hamburguesas, chivitos y rabas, música en vivo y onda playera; abre todos los días.' }
    ]
  },
  {
    id: 'manantiales', zona: 'Manantiales', sub: 'Y Balneario Buenos Aires',
    lugares: [
      { n: 'Dos Hermanas', ig: 'doshermanas.uy', q: 'Dos Hermanas Manantiales', t: 'La milanesa con champi, la comeríamos cuatro veces por semana. Best milanga in town.' },
      { n: 'La Proveeduría', ig: 'laproveeduriauy', q: 'La Proveeduría Manantiales', t: 'Cocina de mar al fuego con foco en el producto; abre solo al mediodía, ideal para un almuerzo largo.' },
      { n: 'La Linda Bakery', ig: 'lalindabakery', q: 'La Linda Bakery Manantiales', t: 'Panadería con horno a leña, ideal para desayunar o merendar; pedí el rogel, las empanadas o la masa madre.' },
      { n: 'El Fondín', ig: 'elfondin.manantiales', q: 'El Fondín Manantiales', t: 'Bodegón italiano sobre la Ruta 10, furor en verano: empanadas de langostinos, mollejas, sorrentinos y risotto para cenar.' },
      { n: 'El Abrazo', ig: 'elabrazo', q: 'El Abrazo Manantiales', t: 'Fideuá GOD. Alto lugar para cita romántica.' },
      { n: 'Mistura', ig: 'misturauy', q: 'Mistura Manantiales', t: 'Cocina de autor de temporada, ambiente cálido y servicio cuidado; abre de noche, con buenos pescados y opciones vegetarianas.' },
      { n: 'Bikini Bistró', ig: 'bikinibistro', q: 'Bikini Bistró Manantiales', t: 'Cocina nikkei mediterránea en la bajada a Playa Bikini, abre solo al mediodía: perfecto para almorzar saliendo de la playa.' },
      { n: 'Manon', ig: 'manondemanantiales', q: 'Manon Manantiales', t: 'Pastelería y panadería con desayunos y almuerzos sobre la Ruta 10; vale por los croissants, cookies y lo dulce.' },
      { n: 'Mar de Verdes', ig: 'mardeverdes.uy', q: 'Mar de Verdes Manantiales', t: 'Comida fresca y saludable a una cuadra de Bikini: ensaladas, sándwiches, licuados y opciones veganas, todo el día.' },
      { n: 'Jacinta', ig: 'jacintarestomanantiales', q: 'Jacinta Manantiales', t: 'De día baguettes, ensaladas y pizzas rústicas; de noche parrilla gourmet y tragos, con bar al atardecer.' },
      { n: 'Cactus y Pescados', ig: 'cactusypescados', q: 'Cactus y Pescados Manantiales', t: 'Clásico cerca de Bikini con terraza y fuego a la vista: pescados, ceviche y buen vino; caro pero servicio impecable.' },
      { n: 'No Me Olvides', ig: 'nomeolvidesmanantiales', q: 'No Me Olvides Manantiales', t: 'Pizzería y parrilla descontracturada sobre la Ruta 10, siempre llena: pizza finita y tragos; probá la de queso de cabra.' },
      { n: 'Elmo Restobar', ig: 'elmorestobar', q: 'Elmo Restobar Manantiales', t: 'La pizza de cebolla caramelizada, goddd.' },
      { n: 'La Vuelta', ig: 'lavuelta.manantiales', q: 'La Vuelta Manantiales', t: 'Cocina y café en Ruta 10 y Sarandí; al momento figura cerrado temporalmente, chequeá antes de ir.' },
      { n: 'Norimoto', ig: 'norimoto.uy', q: 'Norimoto Manantiales', t: 'Barra al aire libre de handrolls al estilo porteño: atún, langostinos, vieiras y toppings con trufa; rápido, mediodía a noche.' },
      { n: 'Panko Sushi', ig: 'pankosushipde', q: 'Panko Sushi Manantiales', t: 'Sushi para llevar en La Barra con muy buena fama entre los locales; conviene encargar con anticipación.' },
      { n: 'Fish Market', ig: 'fishmarket.uy', q: 'Fish Market Manantiales', t: 'Pescados y mariscos a la parrilla, cocina abierta y mesas en la vereda: ceviche, pulpo y sándwich de pejerrey. Reservá.' },
      { n: 'O\'Farrell Kitchen', ig: 'ofarrellkitchen', q: 'O\'Farrell Kitchen Manantiales', t: 'Atendido por sus dueños.' },
      { n: 'Unido', ig: 'unidorestarante.manantiales', q: 'Unido Restaurante Manantiales', t: 'Cocina contemporánea frente al mar, presentaciones impecables y onda relajada pero sofisticada: ideal para un almuerzo largo con vista.' },
      { n: 'La Piccolina', ig: '', q: 'La Piccolina Balneario Buenos Aires', t: 'Rotisería de comida casera para llevar en Balneario Buenos Aires; abre en verano, práctica para resolver una cena sin cocinar.' }
    ]
  },
  {
    id: 'joseignacio', zona: 'José Ignacio', sub: 'De la rotonda para arriba y para abajo',
    lugares: [
      { n: 'La Huella', ig: 'lahuella.parador', q: 'La Huella José Ignacio', t: 'El clásico sobre la duna: pescado a la parrilla, chipirones y volcán de dulce de leche. Reservá sí o sí.' },
      { n: 'Marismo', ig: 'restaurantmarismo', q: 'Marismo José Ignacio', t: 'Cena a la luz de velas con los pies en la arena; cordero al fuego imperdible. Solo en temporada.' },
      { n: 'Tres · La Juanita', ig: 'tres.lajuanita', q: 'Tres La Juanita José Ignacio', t: 'Tope de gama la pasta. Cocina de mar y bosque.' },
      { n: 'Guri · La Juanita', ig: 'guri_lajuanita', q: 'Guri La Juanita José Ignacio', t: 'Bar rústico con mesa de pool y chopp, ideal para un chivito relajado después de la playa.' },
      { n: 'Rizoma · La Juanita', ig: 'rizoma.lajuanita', q: 'Rizoma La Juanita José Ignacio', t: 'Librería enorme con café en el fondo: capuchino, desayunos y meriendas entre pinos. Perfecto para una pausa.' },
      { n: 'El Rancho de Pirulo y Cristina', ig: '_elranchodepiruloycristina', q: 'El Rancho de Pirulo y Cristina Santa Mónica', t: 'Rancho frente a la laguna: pescado fresquísimo, empanadas y sándwich de pejerrey a buen precio. Fijate horarios.' },
      { n: 'Juana Cocina Bar', ig: 'juanacocinabar', q: 'Juana Cocina Bar José Ignacio', t: 'Casa escondida en La Juanita, todo a las velas y al fuego: carnes, pescado y verduras orgánicas. Cena romántica.' },
      { n: 'La Olada', ig: 'laoladarestaurant', q: 'La Olada José Ignacio', t: 'Horno de barro y parrilla en una casa con jardín: cordero, pescado, pan casero. Alternativa relajada y sin pose.' },
      { n: 'Solera vinos y tapas', ig: 'soleravinosytapas', q: 'Solera Vinos y Tapas José Ignacio', t: 'Bar de vinos con tapas y cordero rico, atención de la dueña como en casa de una amiga. Llegá temprano.' },
      { n: 'Namm', ig: 'namm.joseignacio', q: 'Namm José Ignacio', t: 'Casa de madera entre pinos: sushi fresco, carnes a la parrilla y platos en cerámica. Cena íntima, algo cara.' },
      { n: 'Panadería JI', ig: 'panaderiaji', q: 'Panadería JI José Ignacio', t: 'Masa madre, pain au chocolat y pan de queso de los mejores de Uruguay. Premium, pero vale cada peso.' },
      { n: 'El Chiringo', ig: 'elchiringojoseignacio', q: 'El Chiringo José Ignacio', t: 'Parador descontracturado sobre la Brava: pescado, langostinos rebozados y música de fondo. Para pasar el día en reposeras.' },
      { n: 'Santa Teresita', ig: 'santa.teresita', q: 'Santa Teresita José Ignacio', t: 'Mostrador de Trocca: ensaladas, pescado y granos para armar tu plato al mediodía. Probá la torta de dulce de leche.' },
      { n: 'Tato Pescador', ig: 'tatopescador', q: 'Tato Pescador José Ignacio', t: 'Rico, fresquito. El suspiro limeño es top.' },
      { n: 'Popei', ig: 'popeirestaurant', q: 'Popei José Ignacio', t: 'La casa de un pescador. Milanesa grande.' },
      { n: 'La Susana', ig: 'lasusanajoseignacio', q: 'La Susana José Ignacio', t: 'Beach club de Bahía Vik sobre la Mansa: chipirones, pulpo y tragos al atardecer. Caro, pero el plan vale.' },
      { n: 'Izakaya Miniba', ig: 'izakaya_miniba', q: 'Izakaya Miniba José Ignacio', t: 'Barra japonesa en Santa Mónica: nigiris de vieira con caviar, atún con foie y sake. Omakase pausado, de noche.' },
      { n: 'Ferona Club Social', ig: 'feronaclubsocial', q: 'Ferona Club Social José Ignacio', t: 'Bar con bandas de rock, fogón y tragos frente a la laguna. Para salir tarde y bailar en La Juanita.' },
      { n: 'Pionero', ig: 'pionerouy', q: 'Pionero José Ignacio', t: 'Club cultural en Ruta 10 con shows en vivo y entradas por Redtickets. Más para la noche que para comer.' },
      { n: 'Cruz del Sur Farm', ig: 'cruzdelsurfarm', q: 'Cruz del Sur Farm José Ignacio', t: 'Huerta propia en la plaza del pueblo: ensaladas coloridas, pescado y toques de Medio Oriente. Almuerzo fresco, precios altos.' },
      { n: 'Destino', ig: 'restaurante_destino', q: 'Destino Restaurante José Ignacio', t: 'Sushi y wok en La Juanita, cuidado al detalle y con delivery. Abre de noche; buena opción sin tanta pompa.' },
      { n: 'Osaka', ig: 'osaka.joseignacio', q: 'Osaka José Ignacio', t: 'Cocina nikkei de la cadena peruana en versión playera: tiraditos y rolls después de la playa, todo el día.' },
      { n: 'La Colmena', ig: 'lacolmenajoseignacio', q: 'La Colmena José Ignacio', t: 'Pastelería fina en La Juanita: tortas, cafecito y también tapas con cerveza. Pedidos online y delivery.' },
      { n: 'Guayabo', ig: 'guayabo_restaurante', q: 'Guayabo Restaurante José Ignacio', t: 'Cocina local y de estación a cinco minutos del faro, en un espacio tranquilo entre naturaleza. Abre fines de semana.' },
      { n: 'La Taba', ig: 'lataba.restaurante', q: 'La Taba José Ignacio', t: 'Parrilla con música en vivo y micrófono abierto en La Juanita. Para una noche larga con asado y shows.' },
      { n: 'Majuga', ig: 'majuga.ji', q: 'Majuga José Ignacio', t: 'Café, panadería y restaurante de temporada en el pueblo: brunch, almuerzo y cosas para llevar al mediodía.' }
    ]
  },
  {
    id: 'otros', zona: 'En el camino', sub: 'Solanas, Maldonado y alrededores',
    lugares: [
      { n: 'Proa Café', ig: 'proacafeuy', q: 'Proa Café Solanas', t: 'Café de especialidad entre pinos, con desayunos, almuerzos y meriendas, opciones sin gluten y veganas; pet friendly y cowork.' },
      { n: 'El Maestro Italiano', ig: '', q: 'El Maestro Italiano Maldonado', t: 'En Maldonado. Para comprar mucha pasta y cocinar en casa un domingo lluvioso.' },
      { n: 'Pizza Franco', ig: 'pizza_franco', q: 'Pizza Franco Maldonado', t: 'Otro favorito de Maldonado: chivito y la pizza sobre todo.' },
      { n: 'Mesa Redonda', ig: 'mesaredonda.uy', q: 'Mesa Redonda Punta del Este', t: 'Colectivo de chefs con un galpón junto al arroyo en La Barra: doble parrilla, barra y cenas con reserva y eventos.' },
      { n: 'Salón Número 3 Comedor', ig: 'salonnumero3comedor', q: 'Salón Número 3 Comedor Punta del Este', t: 'Rooster tirado y platitos.' }
    ]
  }
];

/* Para salir a tomar algo o una cita. Referencian lugares de arriba por nombre. */
window.PIQUES_SALIR = [
  'Guri · La Juanita', 'Pionero', 'Ferona Club Social', 'Solera vinos y tapas', 'El Fondín', 'No Me Olvides',
  'El Popu · Natural y Popular', 'La Washington Pulpería', 'Estero Estero', 'Al Fin y Al Cabo', 'Capi Bar', 'Malafama'
];

/* Fiestas del verano, por si te quedás hasta fin de año. TBC = a confirmar. */
window.PIQUES_FIESTAS = [
  ['26.12', 'PM Open Air / Fragment · Adam Ten'],
  ['27.12', 'Revellion Punta · sunset'],
  ['28.12', 'La Juanita · Cipriani Group ANOTR (TBC) · Banana'],
  ['29.12', 'Revellion Punta · sunset'],
  ['30.12', 'Ketzal Private · Corona Sunset'],
  ['31.12', 'Sensation + KEY · Fantasy · Revellion Punta NYE (Franky Rizardo & Jamie Jones, TBC) · Réveillon Unique / Punta Verano · Cipriani NYE Black Coffee (TBC) · La Juanita Hot Since 82 · Aura'],
  ['02.01', 'Music On (Marco Carola, Dennis Cruz, Mau P, Frank Storm) · Revellion Punta · Vanguard Michael Bibi · VMN Bosque'],
  ['03.01', 'Punta Music TBA · Arcana Adriatique (TBC) · La Juanita · Punta Verano · Cipriani Group (TBC) · Arde by Johnnie Walker'],
  ['05.01', 'Blavicio · Escándalo'],
  ['07.01', 'Phonetec'],
  ['08.01', 'Exodus'],
  ['09.01', 'Chris Stussy (TBC)']
];
