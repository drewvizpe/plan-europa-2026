# AUDITORÍA — Plan Europa 2026

**Fecha:** 30 de julio de 2026
**Archivo auditado:** `PLAN_EUROPA_2026.html` (publicado en https://drewvizpe.github.io/plan-europa-2026/)
**Método:** 4 agentes de inventario recorriendo el HTML completo + 5 agentes de verificación contra fuentes oficiales.
**Regla aplicada:** ningún dato se conserva "porque ya estaba ahí". Lo que no se pudo comprobar contra fuente real está marcado **NO VERIFICABLE**, nunca como verificado.

---

## 1. RESUMEN EN UNA LÍNEA

Se inventariaron **~440 datos específicos**. La auditoría confirmó los 12 errores que ya traía el MD de correcciones, encontró **~35 errores adicionales** que el MD no tenía, y detectó **dos problemas que rompen el itinerario, no solo el texto**.

---

## 2. LOS DOS HALLAZGOS QUE ROMPEN EL ITINERARIO

### 🚨 A. El teleférico giratorio del Titlis está CERRADO durante el viaje
El **Rotair** (el teleférico giratorio, que es literalmente lo que vende la excursión de **$875 para los 5**) está cerrado por mantenimiento **del 17 de agosto al 11 de diciembre de 2026**. El viaje cae justo en medio.

No es que no puedan subir: existe el teleférico nuevo **TITLIS Connect**, que opera a diario durante ese cierre, y la cueva de hielo, el Cliff Walk y el Ice Flyer siguen abiertos. Pero hay que **confirmar con la agencia antes de pagar** que la excursión se hace igual, al mismo precio, y que nadie les venda "el giratorio".

*Fuente: engelberg.ch (web oficial). Reconfirmar en septiembre — las fechas de mantenimiento se mueven.*

**Bonus:** el sitio decía "teleférico giratorio a 3.238 m". Eso confunde la cumbre (3.238 m) con la estación a la que se llega (**Klein Titlis, 3.020 m**). Son 218 metros que el teleférico no sube.

### 🚨 B. El Oktoberfest ya habrá terminado
El sitio insinuaba que podían encontrar ambiente de Oktoberfest en Munich. El **Oktoberfest 2026 va del 19 de septiembre al 4 de octubre**. Cuando lleguen (12 de octubre) hará **8 días que terminó** y la Theresienwiese estará desmontada.

---

## 3. ERRORES QUE COSTABAN DINERO O PODÍAN ARRUINAR UN MOMENTO

| Qué decía | Qué es verdad | Impacto |
|---|---|---|
| Casa de Julieta: patio gratis, balcón €6 | Desde abril 2026 se entra por el **Teatro Nuovo**, cuesta **€5 o €12**, compra **online obligatoria** con hora fija, y **no hay tarifa juvenil** (la cumpleañera paga completo) | Llegaban sin entrada al momento más importante del cumpleaños |
| Góndola: cuatro versiones (7:30 PM/€90, 6:30 PM/€80-100…) | Tarifa oficial regulada: **€90 de día (9:00-19:00, 30 min)** o **€110 de noche (19:00-4:00, 35 min)**, por góndola, hasta 5 pasajeros. El sol se pone a las **18:31** | Podían pagar €20 de más y perderse la luz |
| Tax Free España: mínimo €90.16 | **No hay mínimo** desde 2018. Reembolso real **10-13%**, no 20% | Dejaban de pedir devolución en compras chicas |
| Coliseo ~€90 por persona | **€18 adultos**, **gratis menores de 18** (pero con reserva nominativa obligatoria) → **€72 todo el grupo** | Sobreestimaba el costo casi 6 veces |
| Seguro "no es obligatorio" | **Francia lo exige** a extracomunitarios: mínimo **€30.000** de cobertura médica. Y entran a Europa por Francia | Riesgo real en frontera |
| Nada sobre la ventana de cancelación | La cobertura de **cancelación solo se contrata dentro de los 7 días** de reservar el paquete | Si ya pasó, ese dinero no es asegurable |
| "999 solo Londres" | El **999 funciona en todo el Reino Unido**; el 112 también | Peligroso en una emergencia fuera de Londres |
| Botón de la embajada de Perú en Italia | El enlace `tel:` tenía **un dígito menos** que el número mostrado | El botón no llamaba a nadie |
| Confirmar excursiones "2 semanas antes (Sep 20)" | El corte real son 18 días = **16 de septiembre** | El recordatorio llegaba 4 días tarde |
| Perú está 5h atrás de Londres | **6 horas** (Londres) y **7 horas** (Europa continental) en octubre | Llamadas a la familia a horas equivocadas |

---

## 4. DATOS FALSOS O INVENTADOS QUE SE CORRIGIERON

- **Primark de Rue de Rivoli (París)** — no existe ningún Primark dentro de París.
- **"Madrid es la capital más alta de Europa"** — es la más alta de la **Unión Europea**; la más alta de Europa es Andorra la Vella (~1.023 m). Madrid está a ~650 m, no 667.
- **"La Sagrada Familia se termina en 2026"** — en 2026 se completó la **Torre de Jesucristo** (172,5 m). Falta la Fachada de la Gloria, prevista para ~**2034**.
- **"En Barcelona se habla catalán, no español"** — catalán y castellano son **ambos oficiales**.
- **"Los mejores döner de Europa" (Frankfurt)** — sin ninguna base. El döner se asocia a **Berlín**.
- **Baguette €4 en París** — el precio real es **€1,20-1,60**.
- **Rue Mouffetard por Maubert-Mutualité** — la estación correcta es **Censier-Daubenton** (línea 7).
- **"Caminen por la izquierda" en el metro de Londres** — la regla es **pararse a la derecha, caminar por la izquierda**. Como estaba, invitaba justo al error que molesta a los londinenses.
- **St Paul £18** — el precio real es **£27**.
- **Piazza Navona: "3 fuentes de Bernini"** — solo la Fontana dei Quattro Fiumi es suya.
- **ETIAS con link a `etiasvisa.com`** — es un intermediario comercial que cobra por un trámite que no necesitan. El único sitio oficial es `travel-europe.europa.eu/etias`.

---

## 5. LO QUE MEJORÓ RESPECTO A LO QUE CREÍAMOS

- **Venecia ya no cobra tasa de acceso.** El periodo de prueba terminó el 26 de julio de 2026. No pagan ni tramitan nada.
- **ETIAS: no existe todavía y no tiene fecha.** No hay nada que pagar ni tramitar. (El MD decía "obligatorio desde septiembre 2027" — esa fecha **no la respalda ninguna fuente**.)
- **La Casa de Julieta NO tiene los pisos cerrados en octubre.** Ese cierre fue una medida temporal por ola de calor, del 15 de julio al 14 de agosto.
- **La quinceañera no paga tasa turística en Innsbruck** aunque cumpla 15 durante el viaje: la exención tirolesa corre hasta fin del año natural.
- **El Coliseo le sale gratis** (menor de 18), aunque igual hay que reservarle su entrada nominativa.

---

## 6. CORRECCIONES AL PROPIO MD

El MD de correcciones tenía cuatro imprecisiones:

1. **"Hacer el repositorio privado"** no oculta la página. GitHub trata la visibilidad del repo y la del sitio publicado como cosas separadas: un repo privado sigue publicando un sitio público. Solo GitHub Enterprise Cloud permite restringir el acceso al sitio.
2. **Los tooltips no los genera JavaScript.** Son atributos `title=` estáticos en el HTML del sidebar. El desfase de −1 día sí existía y ya está corregido en los 19.
3. **Tax free en Francia no es "por tienda y por día".** La aduana francesa admite acumular en la **misma enseña durante hasta 3 días**.
4. **"ETIAS obligatorio desde septiembre 2027"** no tiene fuente. Lo que sí está en la norma es un periodo transitorio de 6 meses más un periodo de gracia posterior, contados desde un arranque que todavía no tiene fecha.

---

## 7. PENDIENTES QUE NO DECIDE CLAUDE (Bloque G)

Marcados en el sitio, con su fecha límite:

| Pendiente | Fecha límite | Nota |
|---|---|---|
| Horario de la góndola | antes de comprar | Las 4 versiones eran incompatibles entre sí y con el tren de las 7 PM |
| ¿Suben a la Torre Eiffel? | **10 de agosto** (se habilita la venta) | ~$190-210 los 5 a la cima |
| Coliseo vs. Capri (día 13) | **16 de septiembre** | Son excluyentes. Coliseo ~$72, Capri ~$1.260 |
| Ventana para que la quinceañera se cambie (día 10) | reunión familiar | 30 minutos no alcanzan |
| Ropa barata: ¿Londres o París? | día 8 es el corte duro | En el Titlis hay nieve |
| Privacidad del sitio publicado | — | El itinerario dice que la casa está vacía del 4 al 22 de octubre |
| Presupuesto | — | No cierra: déficit de $200-400 por persona |

---

## 8. QUEDÓ COMO **NO VERIFICABLE** (no se inventó nada)

- Fechas concretas del **Cambio de Guardia en octubre** — el calendario oficial solo publica con ~2 meses de antelación. El sitio ahora enlaza al calendario en vez de afirmar fechas.
- **Gastos de gestión** de midaticket (Casa de Julieta) y de ticketing.colosseo.it — ninguna fuente oficial los publica.
- **Precio de la Torre de Pisa** — la web oficial publica las tarifas como imagen, no como texto.
- **Recargo del seguro por edad** — ninguna aseguradora publica tabla; hay que cotizar con las fechas de nacimiento reales.
- **Horarios exactos de los mostradores de reembolso en Barajas en octubre** — cambian por temporada.
- **Horarios de vuelos en fechas concretas de octubre 2026** — los vuelos IB0124 y IB1861 existen y la ruta a Gatwick es correcta, pero los horarios hay que confirmarlos en iberia.com.

---

## 9. INVENTARIO COMPLETO

Las cuatro tablas siguientes listan cada dato específico encontrado, con su línea, tipo y estado.

---



---

## Inventario: audit-02-dias1-9.md

# Auditoría de datos — PLAN_EUROPA_2026.html · Líneas 714–1095 (Días 1–9)

Fuente: `C:\Users\Andrew\Desktop\PARA VIAJE EUROPA\PLAN_EUROPA_2026.html`
Sin verificación web. Solo inventario + marca de sospecha.

| Línea | Día | Tipo | Dato (cita exacta breve) | Sospecha |
|---|---|---|---|---|
| 714 | pre | Recomendación temporal | "CUÁNDO COMPRARLO: AHORA (julio-agosto)" | Baja — depende de fecha de lectura |
| 715 | pre | Teléfono / regla país | "EMERGENCIA EN EUROPA = 112 ... Funciona en TODA Europa, incluso sin chip" | Baja — verificable, ampliamente correcto |
| 720 | — | Afirmación cuantitativa | "19 Días · 9 Países" | Media — contar países reales del itinerario |
| 724 | 1 | Fecha | "Domingo 4 de Octubre" | Baja — 4-oct-2026 sí es domingo |
| 728 | 1 | Aeropuerto / horario | "8:00 AM ... Llegar al Jorge Chávez (3 horas antes del vuelo)" | Baja |
| 729 | 1 | Vuelo / número / duración | "11:00 AM ... Vuelo IB0124 Lima → Madrid (11h 40min)" | **ALTA** — nº de vuelo y horario concretos, cambian por temporada |
| 730 | 1 | Terminal / horario | "05:40 AM +1 ... Llegada a Madrid T4S ... ESCALA 3h 50min" | **ALTA** — terminal y escala exactas |
| 731 | 1 | Vuelo / número / aerolínea | "09:35 AM ... Vuelo IB1861 Madrid → Londres Gatwick (Iberia Express, 2h 20min)" | **ALTA** — IB1861 opera normalmente a Heathrow/otros; ruta a Gatwick a confirmar |
| 732 | 1 | Horario llegada | "10:55 AM ... Llegada a Londres Gatwick" | Media |
| 734 | 1 | Gasto | "No necesitan dinero hoy ... En Madrid aceptan tarjeta" | Baja |
| 737 | 1 | Aerolínea | "Avión Lima→Madrid (Iberia). Luego avión Madrid→Londres Gatwick (Iberia)" | Baja |
| 739 | 1 | Horario (contradictorio) | "Llegan a Londres Gatwick a las 10:50 AM" | **ALTA** — contradice 10:55 AM en líneas 732/747 |
| 739 | 1 | Precio recargo | "recargo de $31/persona ($155 familia)" | **ALTA** — precio muy específico de proveedor |
| 739 | 1 | Nombre propio / agencia | "Contrátenlo con Anahí (agente Atrápalo)" | **ALTA** — persona concreta de agencia |
| 743 | 2 | Tipo de cambio | "£1 ≈ $1.33 ≈ S/4.55" | **ALTA** — cambio volátil |
| 743 | 2 | Fecha | "Lunes 5 de Octubre" | Baja — correcto |
| 747 | 2 | Horario / duración | "10:55 AM ... Migraciones, recoger maletas (~45 min)" | Media |
| 749 | 2 | Duración traslado | "Traslado ~1h desde Gatwick" | Media — Gatwick→Londres suele ser más |
| 750 | 2 | Horario hotel | "2:00 PM Check-in hotel" | Media |
| 751 | 2 | Bloque libre | "2:00-6:00 PM ... 4 HORAS" | Baja — cuadra |
| 752 | 2 | Cadena restaurante | "Cena cerca del hotel (Nando's, pub, kebab)" | Media — Nando's es cadena real |
| 755 | 2 | Precio + teléfono | "TIENEN que pagar $31 por persona ($155 familia). Llamen a Anahí (0810-345-0014)" | **ALTA** — 0810 es prefijo ARGENTINO, no peruano; teléfono muy sospechoso |
| 757 | 2 | Presupuesto | "Llevar: ~£30-40/persona (~$40-50)" | Media |
| 758 | 2 | Precios comida + cadena | "Nando's (~£12-15/pp) o pub Fish & Chips (~£10-12). Meal Deal en supermercado: £3.50-5" | **ALTA** — Meal Deal £3.50-5 desactualizable |
| 759 | 2 | Horario comercial | "LUNES: Tiendas y supermercados abren con horario normal" | Baja |
| 760 | 2 | Huso horario | "Jet lag: Perú está 5h atrás" | **ALTA** — en octubre Londres está en BST (UTC+1), Perú UTC-5 → son **6 horas**, no 5 |
| 762 | 2 | Dato factual | "'Big Ben' ... es el nombre de la campana" | Baja — correcto |
| 762 | 2 | Fecha oficial | "La torre se llama oficialmente Elizabeth Tower desde 2012" | Baja — correcto |
| 762 | 2 | Peso / fecha | "La campana pesa 13.7 toneladas y lleva sonando desde 1859" | Baja — correcto |
| 762 | 2 | **Superlativo** + fecha | "el metro de Londres es el MÁS ANTIGUO del mundo (1863)" | Media — superlativo, pero correcto |
| 768 | 2 | Propina | "Propina: 10-12% en restaurantes si no está incluida" | Media — costumbre real ~12.5% service charge |
| 769 | 2 | Regla local | "Caminen por la izquierda en aceras y estaciones" | **Media-ALTA** — en el metro de Londres la regla es *stand on the right* en escaleras; afirmación dudosa |
| 784 | 2 | Platos típicos | "Fish & Chips / English Breakfast / Sunday Roast / Shepherd's Pie / Bangers & Mash / Scones con té / Pie and Mash" | Baja |
| 789 | 2 | Ubicación hotel | "Hotel en Londres (zona aledaña, probablemente periferia) ... a 20-40 min en metro" | Media — especulativo, admitido |
| 795 | 3 | Fecha | "Martes 6 de Octubre" | Baja — correcto |
| 799 | 3 | Horario | "7:30 AM Desayuno en el hotel (incluido)" | Baja |
| 801 | 3 | Atracciones / horario | "9:30-12:30 TOUR PANORÁMICO: Hyde Park, Piccadilly, Big Ben, Buckingham (cambio de guardia), Westminster. ~3 horas" | **ALTA** — el cambio de guardia NO es diario; en octubre suele ser días alternos |
| 803 | 3 | Bloque libre | "12:30-8:00 PM ... ~7 HORAS" | **ALTA** — son 7.5 h; el Día 5 (línea 890) usa "~7.5 HORAS" para el mismo rango |
| 804 | 3 | Barrio | "Cena en Chinatown o cerca del hotel" | Baja |
| 811 | 3 | Precio excursión | "Tour: Este de Londres — $73/pp ($365 familia)" | **ALTA** — 73×5=365 ✓ pero precio de proveedor concreto |
| 812 | 3 | Duración | "en bus y a pie por la zona este de Londres durante 5 horas" | Media |
| 813 | 3 | Atracciones + afirmación | "Catedral de St. Paul (iglesia enorme donde se casó la princesa Diana)" | **ALTA** — dato correcto (1981) pero comprobable |
| 813 | 3 | Afirmación cultural | "Millennium Bridge (puente peatonal que sale en Harry Potter)" | Media — aparece en *Half-Blood Prince*, correcto |
| 813 | 3 | **Superlativo** | "Tower Bridge (el puente más famoso de Londres)" | Media — superlativo subjetivo |
| 813 | 3 | Mercado | "Borough Market (mercado de comida famoso)" | Baja |
| 815 | 3 | Ahorro | "Hacerlo solos — Ahorro: $290" | **ALTA** — no cuadra limpio con $365 del tour; implica $75 de gasto propio sin desglose |
| 816 | 3 | Precio entrada | "TODOS estos lugares son GRATIS (excepto entrar a St. Paul, £18)" | **ALTA** — entrada a St Paul's ha subido bastante por encima de £18 |
| 818 | 3 | Precio almuerzo | "Covent Garden ... Almuerzan aquí ~£8-12/pp" | Media |
| 819 | 3 | Precio entrada | "Si quieren entrar: £18/adulto" (St. Paul) | **ALTA** — duplicado del anterior, mismo riesgo |
| 820 | 3 | Museo gratis | "Tate Modern (museo de arte moderno, GRATIS)" | Baja — colección permanente sí es gratis |
| 821 | 3 | Mercado / puente | "Borough Market ... Tower Bridge (el puente azul y blanco famoso, cruzar es gratis)" | Baja |
| 822 | 3 | Estación de metro / línea | "Metro a estación 'Covent Garden' (línea Piccadilly, azul oscuro)" | Baja — correcto |
| 824 | 3 | Ahorro | "Se ahorran $290" | **ALTA** — repetido, ver 815 |
| 827 | 3 | Presupuesto | "Llevar: ~£50-70/persona. Almuerzo (~£10), cena (~£12-15), metro" | Media |
| 828 | 3 | Multitudes | "Tower Bridge: vayan al lado sur para fotos con menos gente" | Baja |
| 829 | 3 | Seguridad / calle | "Carteristas: Oxford Street y metro 5-7 PM" | Baja |
| 838 | 4 | Fecha + tipo de cambio | "Miércoles 7 de Octubre ... €1 ≈ $1.14 ≈ S/3.90" | **ALTA** — cambio volátil |
| 841 | 4 | Distancia | "Horario del día (470 km)" | Media |
| 843 | 4 | Duración ruta | "8:00 AM Sale el bus del tour hacia Dover (~2h de viaje)" | Media |
| 844 | 4 | Puerto | "~10:30 AM Llegan al puerto de Dover" | Baja |
| 845 | 4 | Duración ferry | "~12:00 PM Ferry cruza el Canal de la Mancha (75 min)" | Media — 90 min es el estándar Dover–Calais |
| 846 | 4 | Ciudad / duración | "~1:15 PM Llegan a Calais (Francia) ... salen hacia París (~3h)" | Media |
| 847 | 4 | Horario | "~5:00 PM Llegan al hotel en París" | Media |
| 848 | 4 | Bloque libre | "5:30-8:00 PM ... 2.5 HORAS" | Baja — cuadra |
| 850 | 4 | Horario tour | "8-1 AM Crucero por el Sena + París iluminado. Vuelven al hotel ~1 AM" | Media |
| 853 | 4 | Regla país / trámite | "registro biométrico nuevo EES: foto + huellas digitales. Es gratis y automático" | **ALTA** — despliegue del EES es progresivo; afirmación puede quedar obsoleta |
| 855 | 4 | Atracción | "los famosos acantilados blancos de Dover" | Baja |
| 859 | 4 | Precio excursión | "Crucero Sena + París Iluminado — $93/pp ($465 familia)" | **ALTA** — 93×5=465 ✓, precio de proveedor |
| 861 | 4 | Duración / horario | "Duración: 5 horas (8 PM - 1 AM)" | **ALTA** — 8 PM a 1 AM son **5 horas** ✓ pero el ítem 850 dice lo mismo; ojo: el texto de 860 describe ~1h de barco + bus |
| 863 | 4 | Ahorro | "Solos — Ahorro: $340" | **ALTA** — $465 − $340 = $125; €17×5 ≈ $97, no cuadra exacto |
| 864 | 4 | Empresa concreta | "'Bateaux Mouches' ... Es una empresa que hace cruceros turísticos por el río Sena" | Media — empresa real |
| 864 | 4 | Muelle / frecuencia / precio | "Salen cada 30 minutos desde un muelle llamado 'Pont de l'Alma' ... Cuesta ~€17 por persona y dura 1 hora" | **ALTA** — precio y frecuencia concretos; Bateaux Mouches suele estar por encima de €17 |
| 865 | 4 | Mirador / distancia | "'Trocadéro' ... Desde el muelle del crucero al Trocadéro son ~15 minutos caminando" | Media |
| 866 | 4 | Horario espectáculo | "durante 5 minutos cada hora en punto (9 PM, 10 PM, 11 PM), la torre BRILLA" | **ALTA** — el centelleo empieza al anochecer; en octubre incluye las 8 PM, y termina antes de la 1 AM |
| 869 | 4 | Precio | "Los $465 suenan mucho pero es una noche que van a recordar" | Media |
| 872 | 4 | Presupuesto | "Llevar: ~€30-40/persona" | Media |
| 876 | 4 | Ubicación hotel | "Hotel en zona de París (probablemente periferia) ... conectados por metro/RER" | Media — especulativo |
| 882 | 5 | Fecha | "Jueves 8 de Octubre" | Baja — correcto |
| 888 | 5 | Atracciones / horario | "9:30-12:30 TOUR PANORÁMICO: Campos Elíseos, Torre Eiffel, avenidas ~3 horas" | Media |
| 890 | 5 | Bloque libre | "12:30-8:00 PM ... ~7.5 HORAS" | **ALTA** — contradice "~7 HORAS" del Día 3 (línea 803) para idéntico rango |
| 891 | 5 | Barrio | "Cena en restaurante del Barrio Latino" | Baja |
| 898 | 5 | Precio excursión | "Montmartre + Barrio Latino + Notre Dame — $78/pp ($390 familia)" | **ALTA** — 78×5=390 ✓, precio de proveedor |
| 899 | 5 | Duración | "durante 5 horas por 3 barrios famosos" | Media |
| 900 | 5 | Fecha / hecho | "Notre Dame (la catedral famosa que se incendió en 2019 y ya reabrió)" | Baja — correcto |
| 902 | 5 | Ahorro | "Hacerlo solos — Ahorro: $320" | **ALTA** — $390 − $320 = $70 sin desglose |
| 904 | 5 | Plaza / **superlativo** | "Place du Tertre ... Sacré-Cœur — una iglesia blanca gigante con la MEJOR vista panorámica de todo París. Entrar es GRATIS" | **ALTA** — superlativo discutible (Montparnasse/Eiffel); la entrada a la basílica sí es gratis, la cúpula no |
| 905 | 5 | Calle / mercado | "La calle 'Rue Mouffetard' tiene mercado callejero con quesos, frutas, crêpes" | Media |
| 906 | 5 | **Superlativo** | "Notre Dame ... La catedral más famosa del mundo" | Media — superlativo |
| 906 | 5 | Fecha reapertura | "ya reabrió restaurada (diciembre 2024)" | Baja — correcto |
| 906 | 5 | Dominio / regla | "RESERVAR ONLINE antes de ir en la web oficial notredamedeparis.fr (es gratis la reserva)" | **ALTA** — la política de reserva ha cambiado varias veces desde la reapertura |
| 906 | 5 | Precio entrada | "Las torres cuestan €16/adulto (gratis menores de 18)" | **ALTA** — precio concreto; las torres reabrieron después y la tarifa puede diferir |
| 908 | 5 | Estación metro / funicular | "Metro a estación 'Anvers' → subir la colina a pie o en funicular (cuesta 1 ticket de metro)" | Media — correcto históricamente |
| 909 | 5 | Precio servicio | "si quieren un retrato cuesta ~€20-50" | Media |
| 910 | 5 | Precio comida | "una crêpe ... (~€5) en cualquier puesto callejero" | Media |
| 911 | 5 | Estación metro | "Metro a estación 'Maubert-Mutualité' → caminar por Rue Mouffetard" | **Media-ALTA** — Rue Mouffetard queda más cerca de Place Monge / Censier-Daubenton |
| 912 | 5 | Distancia | "Caminar a Notre Dame (~10 min)" | Media |
| 917 | 5 | Presupuesto | "Llevar: ~€50-60/persona. Almuerzo (~€6), cena menú del día (~€13), metro" | **ALTA** — €13 para menú del día en París es optimista |
| 918 | 5 | Estafa / lugar / precio | "ESTAFA: Pulseras en Montmartre ... Escaleras del Sacré-Cœur ... exigen €10-20" | Baja |
| 919 | 5 | Estafa / lugar | "ESTAFA: Peticiones falsas ... Sacré-Cœur, Ópera" | Baja |
| 921 | 5 | Fecha / dato | "La Torre Eiffel iba a ser DESMONTADA 20 años después de construirla (1889)" | Baja — correcto |
| 921 | 5 | Cifra | "le cambian la pintura cada 7 años y usan 60 toneladas de pintura cada vez" | Media — correcto |
| 921 | 5 | Cifra | "En verano la torre CRECE 15 cm por la dilatación del metal" | Media — correcto |
| 926 | 5 | Regla cultural | "No pidan ketchup con papas fritas. Los franceses lo consideran una ofensa culinaria" | **Media-ALTA** — exageración; el ketchup es común en Francia |
| 928 | 5 | Propina | "Propina: No es obligatoria pero 5-10% si el servicio fue bueno" | Baja |
| 946 | 5 | Platos típicos | "Croissant / Baguette / Crêpe / Jambon-beurre / Escargots / Coq au vin / Ratatouille / Macarons / Quiche Lorraine" | Baja |
| 950 | 5 | Mirador | "Desde el Trocadéro: clásica foto frontal con la Torre Eiffel centrada" | Baja |
| 955 | 5 | **Superlativo** / puente | "Pont Alexandre III: el puente más bonito de París, con lámparas doradas" | Media — superlativo subjetivo |
| 961 | 5 | Hotel | "Mismo hotel en París (3 noches seguidas: Días 4, 5 y 6)" | Baja |
| 966 | 6 | Fecha | "Viernes 9 de Octubre" | Baja — correcto |
| 971 | 6 | Horario tour | "8:30 AM Si contratan Versalles: Bus los recoge del hotel" | Media |
| 972 | 6 | Horario / servicio | "9:30 AM-1:30 PM EXCURSIÓN VERSALLES ... Skip-the-line incluido" | **ALTA** — contradice "8:30 AM-2 PM" de línea 978 y "5h" de línea 980 |
| 974 | 6 | Bloque libre + tiendas | "2:00-8:00 PM TARDE LIBRE 6 HORAS ... compras Primark/Galeries Lafayette" | Media — contradice el título "2:30 PM — Tarde libre" de línea 981 |
| 978 | 6 | Precio excursión | "Versalles — $114/pp ($570)" | **ALTA** — 114×5=570 ✓, precio de proveedor |
| 978 | 6 | Horario + afirmación | "8:30 AM-2 PM. Sin cola + guía + transporte. Solos: 2-3 HORAS de cola" | **ALTA** — "2-3 horas de cola" es afirmación fuerte; contradice horario de línea 972 |
| 980 | 6 | Cifra concreta | "El Salón de los Espejos (357 espejos)" | Media — cifra citada habitualmente (357) |
| 980 | 6 | Duración | "5h pasan volando" | **ALTA** — contradice las 4h de línea 972 |
| 982 | 6 | Precios panadería | "Almuerzo boulangerie: baguette €4 + croissant €1.50" | **ALTA** — baguette de €4 es muy alta (típico €1-1.50); posible error |
| 982 | 6 | **Superlativo** + línea metro | "Trocadéro = MEJOR foto Torre Eiffel (metro línea 6)" | Media — Trocadéro es línea 6 y 9 ✓ |
| 982 | 6 | Tienda + dirección | "Primark Rue de Rivoli (ropa barata)" | **ALTA** — Primark en Rue de Rivoli: existencia dudosa/cambiante |
| 982 | 6 | Tienda + servicio | "Galeries Lafayette (cúpula de vidrio gratis, terraza con vista)" | Media — real, pero terraza/acceso pueden cambiar |
| 984 | 6 | Presupuesto | "Llevar: ~€40-50/persona" | Media |
| 986 | 6 | Duración traslado | "los lleva a Versalles (~45 min), los trae de vuelta a París centro ~2 PM" | Media |
| 989 | 6 | Distancia | "Día largo de ruta (607 km)" | Media |
| 993 | 7 | Fecha + distancia | "Sábado 10 de Octubre • 607 km" | Baja — fecha correcta |
| 997 | 7 | Horario | "6:30 AM Desayuno TEMPRANO + EMPACAR TODO" | Baja |
| 998 | 7 | Duración ruta | "7:30 AM Sale el bus hacia Luxemburgo (~4h)" | **ALTA** — 7:30 + 4h = 11:30, pero el ítem siguiente dice ~12:00 PM |
| 999 | 7 | Parada libre | "~12:00 PM Parada Luxemburgo ~1.5 HORAS libres" | **ALTA** — contradice "parada ~1h libre" de línea 1035 |
| 1000-1001 | 7 | Horario / atracción | "1:30 PM Bus hacia Valle del Rin ... 3:00-5:00 PM Castillos medievales + Roca de Loreley" | Media |
| 1002 | 7 | Horario llegada | "~7:00 PM Llegan a Frankfurt. Check-in hotel" | Media |
| 1009 | 7 | **Superlativo** / hecho | "Luxemburgo es el único Gran Ducado del mundo" | Media — correcto |
| 1009 | 7 | **Superlativo** + fecha | "Fue el PRIMER país en tener transporte público 100% gratis (2020)" | Media — correcto (feb 2020) |
| 1009 | 7 | Idiomas | "Hablan 3 idiomas oficiales" | Baja — correcto |
| 1009 | 7 | Cifra | "Loreley ... esta roca (132m de altura)" | Media — correcto |
| 1009 | 7 | **Superlativo** / institución | "Frankfurt: Es la capital financiera de Europa. Aquí está el Banco Central Europeo" | Media — superlativo; BCE sí está en Frankfurt |
| 1012 | 7 | Regla cultural | "PUNTUALIDAD EXTREMA. Si el bus sale a las 7:30, llega a las 7:25" | Baja |
| 1015 | 7 | Propina | "Propina: 5-10%. Al pagar digan el total redondeado" | Baja |
| 1031 | 7 | Platos típicos | "Bratwurst / Currywurst / Schnitzel / Döner Kebab / Pretzel / Sauerkraut / Apfelstrudel" | Baja |
| 1033 | 7 | Precio + **superlativo** | "Döner Kebab €5-7 ... los MEJORES de Europa) o Currywurst €3-5" | **ALTA** — superlativo + precios; el Döner "mejor de Europa" suele atribuirse a Berlín, no a Frankfurt |
| 1035 | 7 | Duración parada | "París → Luxemburgo (parada ~1h libre)" | **ALTA** — contradice 1.5 HORAS de línea 999 |
| 1041 | 8 | Fecha + distancia + cambio | "Domingo 11 de Octubre • 422 km ... CHF 1 ≈ $1.24 ≈ S/4.20" | **ALTA** — cambio volátil; además implica $1≈S/3.39 mientras £/€ implican $1≈S/3.42 |
| 1046 | 8 | Duración ruta | "8:00 AM Sale el bus hacia Heidelberg (~1h)" | **ALTA** — 8:00 + 1h = 9:00, pero el ítem siguiente dice ~9:30 AM |
| 1047 | 8 | Parada / atracción | "~9:30 AM Heidelberg ~1-1.5 HORAS libres. Puente viejo + casco histórico" | **ALTA** — contradice "parada ~1h" de línea 1062 |
| 1048 | 8 | Duración ruta | "11:00 AM Bus hacia Titisee (Selva Negra) (~2.5h)" | Media |
| 1049 | 8 | Parada + precio | "~1:30 PM Titisee ~1.5 HORAS libres ... probar tarta Selva Negra (€5)" | **ALTA** — contradice "parada ~45min" de línea 1062; precio concreto |
| 1050-1051 | 8 | Atracción / parada | "3:00 PM Bus hacia Cataratas del Rin ... ~4:00 PM ~30 min parada" | **ALTA** — Titisee→Rheinfall son ~1h45-2h en bus, no 1h |
| 1052 | 8 | Horario / afirmación | "~6:00 PM Llegan a Zurich ... ¡SUIZA = CARÍSIMO!" | Media |
| 1053 | 8 | Cadenas supermercado | "Cena (comprar en supermercado Migros/Coop, NO restaurante)" | Baja — cadenas reales |
| 1058 | 8 | Precios concretos | "Café CHF 5-6 (~$6). Comida en restaurante CHF 25-40/pp ... Migros o Coop (comida preparada CHF 8-12)" | **ALTA** — precios muy específicos; "CHF 5-6 ≈ $6" no cuadra con el cambio declarado (1.24 → $6.2-7.4) |
| 1059 | 8 | Regla país / horario | "En Alemania y Suiza las tiendas y supermercados normales CIERRAN los domingos ... los supermercados de la estación central de tren (Hauptbahnhof)" | **ALTA** — regla correcta en general, pero "abre todos los días" es afirmación concreta verificable |
| 1060 | 8 | Presupuesto | "Llevar: ~€30 para Alemania + ~CHF 20-30 para Suiza" | Media |
| 1062 | 8 | Duraciones parada | "Heidelberg (parada ~1h) → Titisee/Selva Negra (parada ~45min) → Cataratas del Rin (parada breve)" | **ALTA** — contradice líneas 1047 y 1049 |
| 1063 | 8 | Regla monetaria | "Muchos lugares en Suiza aceptan euros pero les dan cambio en francos" | Baja |
| 1069 | 9 | Fecha + distancia | "Lunes 12 de Octubre • 423 km" | Baja — fecha correcta |
| 1074-1075 | 9 | Horario / duración | "8:00 AM Sale el bus hacia Lucerna (~1h) ... 9:30 AM Llegan a Lucerna" | **ALTA** — 8:00 + 1h = 9:00, no 9:30 |
| 1076 | 9 | Excursión / horario | "10:00 AM-2:00 PM EXCURSIÓN MONTE TITLIS: Funicular + teleférico giratorio + cueva hielo + Cliff Walk. ~4 horas" | **ALTA** — Titlis está en Engelberg (~40-50 min de Lucerna); ida+vuelta+cima en 4h es muy justo |
| 1077 | 9 | Atracciones | "4 HORAS libres en Lucerna. Puente Capilla + León + paseo lago" | Media |
| 1078 | 9 | Duración ruta | "2:30 PM Bus hacia Vaduz (Liechtenstein) (~1.5h)" | **ALTA** — Lucerna→Vaduz es ~2h; además a las 2:30 el grupo de Titlis aún estaría volviendo de Engelberg |
| 1079 | 9 | Parada / souvenir | "~4:00 PM Vaduz ~30 min. Sellar pasaporte como souvenir" | Media |
| 1080-1081 | 9 | Duración ruta | "4:30 PM Bus hacia Munich (~3.5h) ... ~8:00 PM Llegan a Munich" | Media — cuadra |
| 1084 | 9 | Fecha / atracción | "Puente de la Capilla (madera, 1333) + León de Lucerna (tallado en roca)" | Baja — 1333 correcto |
| 1086 | 9 | Precio excursión | "Monte Titlis — $175/pp ($875)" | **ALTA** — 175×5=875 ✓, precio de proveedor alto |
| 1086 | 9 | Altitud / cifras | "Teleférico GIRATORIO a 3,238m. Cueva de hielo. Puente colgante 500m altura. ÚNICO" | **ALTA** — 3,238m es la cumbre; la estación Rotair llega a ~3,020m |
| 1088 | 9 | Temperatura | "ROPA TITLIS: Cima -5°C a 0°C" | Media |
| 1089 | 9 | Cifra + superlativo | "Teleférico gira 360°. Cueva azul fluorescente. Puente con 500m de caída" | Media |
| 1090 | 9 | **Superlativo** + precio | "Vaduz ... Capital del país más pequeño de la ruta ... sellar el pasaporte (~CHF 3) en la oficina de turismo" | **ALTA** — precio concreto del sello (CHF 3) y superlativo |
| 1092 | 9 | **Superlativo** + fecha | "El Oktoberfest de Munich (la fiesta de cerveza más grande del mundo) termina la primera semana de octubre" | **ALTA** — el Oktoberfest suele acabar el primer domingo de octubre (o el 3 si cae después); la fecha exacta de 2026 debe verificarse |
| 1093 | 9 | Presupuesto + horario | "Llevar: ~CHF 20 + ~€30 Munich ... LUNES: Tiendas abren con horario normal en Suiza y Alemania" | Media |
| 1096 | 9 | Duración | "suben en teleférico (~45 min subida), pasan ~2h arriba" | Media — cuadra con las 4h declaradas solo si el traslado Lucerna-Engelberg no cuenta |

**Total de filas inventariadas: 138**



---

## Inventario: audit-03-dias10-19.md

# Auditoría de datos — PLAN_EUROPA_2026.html — líneas 1095-1530 (Días 10-19)

Archivo fuente: `C:\Users\Andrew\Desktop\PARA VIAJE EUROPA\PLAN_EUROPA_2026.html`
Rango cubierto: 1095-1530 (completo, leído en 6 tramos)
NO se verificó nada en web. Solo inventario + marcado de sospechas.

| Línea | Día | Tipo | Dato (cita exacta breve) | Sospecha |
|---|---|---|---|---|
| 1095 | 9→10 | Ruta | "Zurich → Lucerna ... → Vaduz, Liechtenstein (parada breve) → Munich" | — |
| 1096 | 9 | Atracción/duración | "Monte Titlis ... teleférico (~45 min subida), pasan ~2h arriba" | Duración subida teleférico verificable |
| 1097 | 9 | Moneda | "Mañana en FRANCOS SUIZOS. Al llegar a Munich (Alemania) vuelven a EUROS." | — |
| 1103 | 10 | Fecha/distancia | "Martes 13 de Octubre • 🎉 QUINCEAÑERA • 550 km" | Verificar 13-oct-2026 = martes; 550 km Munich→Venecia |
| 1107 | 10 | Distancia | "Horario del día (550 km - EL DÍA MÁS ESPECIAL)" | — |
| 1108 | 10 | Horario | "6:30 AM ... Desayuno + EMPACAR" | — |
| 1109 | 10 | Horario/duración | "7:30 AM Sale el bus hacia Innsbruck (~2h)" | **CONTRADICE L1110**: 7:30+2h = 9:30 AM, no 11:00 AM |
| 1110 | 10 | Horario/precio | "~11:00 AM Innsbruck ~1-1.5 HORAS libres ... Apfelstrudel (€5)" | Hora inconsistente con L1109; parada "1h" en L1170 |
| 1111 | 10 | Horario/duración | "12:30 PM Bus hacia Verona (cruzan frontera Austria→Italia, ~2h)" | Innsbruck→Verona son ~280 km; ~2h parece corto |
| 1112 | 10 | Horario/precio | "~2:30 PM VERONA ~2 HORAS libres 💕 Casa de Julieta (balcón €6)" | **€6 = precio viejo probable**; "2 HORAS" vs "1.5-2h" en L1170 |
| 1113 | 10 | Horario | "4:30 PM Bus hacia Venecia/Mestre (~2h)" | — |
| 1114 | 10 | Horario | "~6:30 PM Llegan al hotel en Mestre. Check-in RÁPIDO" | Choca con góndola 6:30 PM de L1142/L1167 |
| 1115 | 10 | Transporte/precio | "7:00 PM Tren Mestre → Venezia Santa Lucia (10 min, €1.50/pp)" | Precio y duración verificables |
| 1116 | 10 | **Góndola v1** | "7:30 PM 🛶 Góndola privada al atardecer (~30 min, €90 en efectivo, toda la familia)" | **CONTRADICCIÓN**: hora 7:30 PM + €90; según L1167 después de 7 PM son €110 |
| 1117 | 10 | Horario | "8:30 PM CENA DE QUINCEAÑERA en restaurante de Venecia + torta encargada" | **CONTRADICE L1142** (cena 7:30 PM, torta 8:30 PM) |
| 1118 | 10 | Café/horario | "10:30 PM Caffè Florian en Plaza San Marco (orquesta en vivo)" | **CONTRADICE L1142** (Florian 9:30 PM) |
| 1119 | 10 | Transporte | "~11:30 PM Último tren Venecia → Mestre (o Uber si ya cerraron)" | **Uber no opera en Venecia/Mestre** (solo taxi/NCC) |
| 1122 | 10 | Calle/precio | "Calle María-Theresien con Alpes de fondo ... Apfelstrudel (~€5)" | — |
| 1125 | 10 | Tour/precio | "🎟 Tour: Visita Verona — $55/pp ($275 familia)" | 55×5=275 ✔ |
| 1126 | 10 | Tour/duración | "Tour guiado de 2.5 horas ... Piazza delle Erbe, Casa de Julieta, Arena" | Tour 2.5h no cabe en la parada de "~2 horas" (L1112) |
| 1130 | 10 | Precio entrada | "El patio de abajo es gratis. Subir al balcón cuesta €6/persona." | **Precio viejo probable** (Casa di Giulietta subió) |
| 1131 | 10 | Afirmación factual | "¿Qué es la Arena? ... Tiene 2000 años y todavía se usa para conciertos y ópera." | Verificable (Arena ~30 d.C.) |
| 1133 | 10 | Dirección/precio | "Casa de Julieta (Via Cappello 23, a 5 min de donde los deja el bus)" + "suban al balcón (€6/pp)" | Dirección plausible; €6 sospechoso (3ª mención) |
| 1134 | 10 | Precio | "3:30 PM → Helado en Piazza delle Erbe (~€3)" | — |
| 1135 | 10 | Horario | "4 PM → Caminen a la Arena (5 min). Fotos desde afuera." | — |
| 1137 | 10 | Precio/ahorro | "Se ahorran $275 y la experiencia es mucho más personal" | Coherente con L1125 |
| 1141 | 10 | Transporte/precio | "Tren a Venezia Santa Lucia: 10 min, ~€1.50/pp." | Repite L1115 ✔ |
| 1142 | 10 | **Góndola v2** | "6:30 PM → Góndola privada al atardecer. €80-100 toda la familia (caben 5)." | **CONTRADICCIÓN triple**: hora 6:30 vs 7:30 (L1116); precio €80-100 vs €90 vs €90/€110 |
| 1142 | 10 | Restaurante/precio | "Trattoria alla Madonna (Rialto, desde 1954, €15-28/plato)" | Año fundación y rango de precios verificables |
| 1142 | 10 | Pastelería/precio | "Pasticceria Tonolo o Rosa Salva ... €30-50" (torta) | — |
| 1142 | 10 | Café/afirmación | "Caffè Florian en Piazza San Marco (café más antiguo del mundo, 1720). ... ~€15-20/pp" | **Superlativo dudoso** ("más antiguo del mundo"); fecha 1720 verificable |
| 1144 | 10 | Precio | "Tiara: Compren una en cualquier tienda de accesorios ... (~€5-15)" | — |
| 1147 | 10 | Barrio | "Tiendas de bijouterie en el barrio Cannaregio (más baratas) o cerca del Rialto" | — |
| 1148 | 10 | Precio | "Ramo pequeño: €10-20." (florerías cerca de la estación Santa Lucia) | — |
| 1150 | 10 | Frase italiana | "È il compleanno di 15 anni di mia figlia. Potete decorare il tavolo?" | — |
| 1151 | 10 | Pastelería | "Encárguenla con UN DÍA de anticipación en Pasticceria Tonolo o Rosa Salva." | — |
| 1155 | 10 | Calle | "Caminando por María-Theresien-Straße con los Alpes nevados de fondo" | — |
| 1157 | 10 | Atracción | "Patio de Julieta: Tocando la estatua de bronce de Julieta (tradición)." | — |
| 1159 | 10 | Afirmación | "Arena de Verona: ... el anfiteatro de 2000 años atrás." | Ver L1131 |
| 1166 | 10 | Regla/precio | "Acqua Alta ... (5-20cm) ... botas de plástico desechables por ~€10 ... app 'Acqua Alta Venezia'" | Nombre exacto de la app verificable |
| 1167 | 10 | **Góndola v3** | "Precio oficial 2026: €90 de día (hasta 7 PM) o €110 de noche (después 7 PM). Para la quinceañera al atardecer (~6:30 PM) sería €90." | **CONTRADICE L1116** (7:30 PM → sería €110). "Precio oficial 2026" es afirmación fuerte sin fuente |
| 1167 | 10 | Regla pago | "Góndola: SOLO EFECTIVO. Los gondoleros NO aceptan tarjeta. Lleven €90-110" | Verificable |
| 1168 | 10 | **Góndola v4** | "Góndola €90 de día / €110 de noche (en EFECTIVO...), cena ~€25-40/pp, torta €30-50, Florian ~€15-20/pp. Total familia: ~€400-600." | 4ª mención de precio; presupuesto total a chequear vs componentes |
| 1168 | 10 | Presupuesto | "Llevar: ~€100-150/persona. Día más caro del viaje." | — |
| 1170 | 10 | Logística | "Munich → Innsbruck (parada ~1h) → Verona (parada ~1.5-2h TIEMPO LIBRE) → Venecia/Mestre" | **CONTRADICE L1110** ("~1-1.5 HORAS") y **L1112** ("~2 HORAS") |
| 1171 | 10 | Hotel/transporte | "Hotel en MESTRE ... tren (~10 min, ~€1.50/pp)" | — |
| 1172 | 10 | Transporte/precio | "Los trenes salen cada 10-15 min ... El último tren de vuelta es ~11:30 PM. Si salen del Florian a las 10:30 PM ... O Uber/taxi desde Piazzale Roma (~€20)." | **Asume Florian 10:30 PM** (L1118) contra L1142 (9:30 PM); **Uber no opera en Venecia** |
| 1178 | 11 | Fecha/distancia | "Venecia → Roma • Miércoles 14 de Octubre • 527 km" | Distancia verificable (~520-530 km) |
| 1183 | 11 | Estación | "8:30 AM Bus al estacionamiento de Venecia (Piazzale Roma)" | — |
| 1184 | 11 | Transporte | "9:00 AM Caminar/vaporetto a Plaza San Marcos" | — |
| 1185 | 11 | Horario/precio | "9:30 AM-12:30 PM MAÑANA LIBRE ... 3 HORAS ... Basílica (gratis)" | **"Basílica gratis" sospechoso** — San Marco cobra entrada desde hace años |
| 1186 | 11 | Comida/precio | "Almuerzo: Cicchetti en bacari (€1-3 cada uno)" | Rango bajo, verificable |
| 1188 | 11 | Duración | "2:00 PM Sale el bus hacia Roma (~5-6h)" | — |
| 1192 | 11 | Incluido | "Mañana en Venecia: Puente Suspiros, San Marcos, Basílica (gratis)." | Repite el "gratis" dudoso |
| 1195 | 11 | Transporte/precio | "'Traghetto' ... Cuesta solo €2 por persona. Dura 2 minutos." | Precio verificable (subió para turistas) |
| 1196 | 11 | Comida/precio | "cicchetti ... Cuestan €1-3 cada uno ... bacari ... cerca del Puente Rialto" | — |
| 1197 | 11 | Barrio | "barrio Cannaregio (5 min de Rialto) — callejones tranquilos, precios más bajos" | — |
| 1199 | 11 | Datos factuales | "Venecia tiene 118 islas, 400 puentes, 150 canales. Se hunde 1-2mm cada año. Los habitantes son solo ~50,000 (antes eran 175,000)." | **Cifras clásicas de folleto**; "400 puentes" y "150 canales" varían mucho por fuente |
| 1199 | 11 | Superlativo | "Roma: Tiene MÁS fuentes públicas que cualquier ciudad del mundo (~2,000)." | **Superlativo dudoso** |
| 1199 | 11 | Dato factual | "El Vaticano es el país más pequeño del mundo (44 hectáreas) y tiene su propio cajero automático con instrucciones en LATÍN." | 44 ha plausible; cajero en latín verificable |
| 1199 | 11 | Dato factual | "El Coliseo podía llenarse de agua para simular batallas navales." | **Discutido por historiadores** |
| 1206 | 11 | Precio/regla | "'Coperto': Cargo por sentarse, €1-3/persona. Es legal y normal" | — |
| 1207 | 11 | Regla | "Propina: NO es obligatoria. El coperto ya lo cubre." | — |
| 1236 | 11 | Regla/tasa | "La tasa turística de entrada a Venecia solo se cobra de abril a julio. En OCTUBRE no aplica." | **ALTA sospecha** — el calendario del contributo di accesso cambia cada año |
| 1237 | 11 | Presupuesto | "Llevar: ~€35-45/persona. Almuerzo cicchetti (~€10)" | — |
| 1239 | 11 | Estación | "estacionamiento de Piazzale Roma o Tronchetto ... vaporetto (barco-bus)" | — |
| 1241 | 11 | Hotel | "Hotel en zona de Roma (3 noches seguidas: Días 11, 12 y 13)" | — |
| 1246 | 12 | Fecha | "Roma - Tour + Vaticano • Jueves 15 de Octubre" | — |
| 1252 | 12 | Tour/horario | "9:30-12:30 TOUR PANORÁMICO ROMA: Coliseo (exterior), Circo Máximo, Santa María la Mayor, Vaticano (exterior)" | — |
| 1254 | 12 | Horario | "12:30-4:30 PM TARDE LIBRE 4 HORAS ... Roma Barroca por su cuenta (Trevi, Panteón, Navona)" | **CONTRADICE L1263** (Roma Barroca = 5 horas) |
| 1255 | 12 | Excursión/duración | "~4:30 PM EXCURSIÓN MUSEOS VATICANOS (si la contratan). ~2-3 horas dentro" | Museos Vaticanos con horario de tarde: verificar apertura a esa hora |
| 1256 | 12 | Horario | "~7:30 PM Fin Vaticano. Vuelven al hotel o cenan cerca" | **CONTRADICE L1280** ("el tour los devuelve al hotel (~10 PM)") |
| 1257 | 12 | Barrio/superlativo | "8:00 PM Cena en Trastevere (el barrio más bonito de Roma)" | Opinión presentada como hecho |
| 1263 | 12 | Tour/precio/duración | "El tour 'Roma Barroca' cuesta $73/pp ($365 familia) ... 5 horas." | 73×5=365 ✔; **duración choca con ventana de 4h (L1254)** |
| 1264 | 12 | Comparación | "Es como si les cobraran $73 por llevarlos de la Plaza de Armas a la Catedral de Lima" | — |
| 1265 | 12 | Ahorro | "Plan por su cuenta (ahorro $310)" | **Inconsistente**: el tour cuesta $365 familia, no $310 |
| 1266 | 12 | Comida/precio | "Pizza al taglio ... cuesta ~€2-4 por porción" | — |
| 1267 | 12 | Atracción/superlativo | "Fontana di Trevi ... GRATIS ... Probablemente la fuente más famosa del mundo." | Superlativo suavizado; verificar si hay control de acceso/entrada nueva |
| 1268 | 12 | Precio entrada | "Panteón: ... Entrada €5 (gratis menores de 18)." | **Precio y política de gratuidad verificables** — cambió tras 2023 |
| 1269 | 12 | Atracción/atribución | "Piazza Navona: Plaza ovalada con 3 fuentes enormes del escultor Bernini." | **Atribución errónea probable** — solo la Fontana dei Quattro Fiumi es de Bernini |
| 1269 | 12 | Precio | "sentarse en una terraza a tomar algo (~€4-5 un café)" | — |
| 1271 | 12 | Horario | "Trevi SIEMPRE llena. Vayan temprano (antes 9 AM) o de noche (después 9 PM)" | — |
| 1272 | 12 | Excursión/precio | "Museos Vaticanos + Capilla Sixtina — $114/pp ($570)" | 114×5=570 ✔ |
| 1272 | 12 | Dato factual | "Miguel Ángel pintó la bóveda con 33 años y El Juicio Final con 60." | **Edades dudosas** — bóveda 1508-12 (33-37 a.), Juicio Final 1536-41 (61-66 a.) |
| 1272 | 12 | Espera | "Sin cola (normal: 2-4 HORAS)." | Cifra alta, verificable |
| 1274 | 12 | Estafa/precio | "Gladiadores falsos en el Coliseo ... luego cobran €5-20." | — |
| 1275 | 12 | Estafa/precio | "Rosas 'gratis' 📍 Trevi, Piazza di Spagna ... exigen €5-10." | — |
| 1276 | 12 | Presupuesto | "Llevar: ~€60-80/persona. Pizza (~€5), Panteón (€5), cena Trastevere (~€12-15)." | Repite €5 del Panteón |
| 1277 | 12 | Comida/precio | "cacio e pepe (~€10) o carbonara (~€12)" | — |
| 1280 | 12 | Transporte/dato | "Roma tiene solo 3 líneas de metro (A, B, C) — es simple." | Existe el ramal B1; simplificación |
| 1280 | 12 | Horario | "Si contratan Vaticano: el tour los devuelve al hotel (~10 PM)." | **Contradice L1256/L1258** |
| 1282 | 12 | Horario | "Si van a Nápoles/Capri: salen 7 AM, vuelven 8:30 PM." | — |
| 1286 | 13 | Fecha | "Roma - Día libre • Viernes 16 de Octubre" | — |
| 1291 | 13 | Excursión/horario | "7:00 AM-8:30 PM SI contratan Nápoles y Capri ... almuerzo incluido" | — |
| 1293 | 13 | Horario | "9:00 AM-7:00 PM DÍA COMPLETO LIBRE EN ROMA 10 HORAS" | — |
| 1297 | 13 | Excursión/precio | "Opción A: Nápoles y Capri — $252/pp ($1,260 familia)" | 252×5=1260 ✔ |
| 1298 | 13 | Duración | "bus de Roma a Nápoles (2.5h) ... ferry ... a la isla de Capri (1h)" | Roma→Nápoles 2.5h y ferry 1h: verificables |
| 1299 | 13 | Afirmación | "Es donde vacacionan las celebridades europeas." | Afirmación de color |
| 1300 | 13 | Precio | "Hacerlo solos cuesta ~$100-130/pp" | Estimación sin desglose |
| 1301 | 13 | Superlativo | "Capri es una de las islas más hermosas de Europa." | Opinión |
| 1302 | 13 | Presupuesto | "Opción B: Día libre en Roma (presupuesto: ~€40-50/pp)" | — |
| 1304 | 13 | Barrio | "¿Qué es Trastevere? El barrio más bonito de Roma ... como el Barranco de Lima" | Superlativo repetido (L1257) |
| 1305 | 13 | Parque/precio | "Villa Borghese ... alquilar bicicletas (~€5/hora) o botes ... mirador llamado 'Pincio'" | Precio bici verificable |
| 1307 | 13 | Iglesia | "Trastevere: ... la iglesia Santa María (mosaicos dorados, gratis)" | — |
| 1309 | 13 | Barrio/precio | "Almuerzo en Testaccio (barrio de comida auténtica, trattoria ~€12/pp)" | — |
| 1310 | 13 | Tiendas | "Compras: Via del Corso (Zara, H&M a precios italianos), tienda OVS (ropa barata italiana)" | — |
| 1311 | 13 | Superlativo | "Piazza di Spagna: la escalinata más famosa de Roma (gratis, fotos)" | Nota: está prohibido sentarse en la escalinata (regla no mencionada) |
| 1313 | 13 | Ahorro | "El ahorro es de $1,260 para la familia" | Coherente con L1297 ✔ |
| 1316 | 13 | Presupuesto | "Capri: tour ya pagado + ~€20 extras. Roma libre: ~€40-50/persona." | — |
| 1324 | 14 | Fecha/distancia | "Roma → Florencia • Sábado 17 de Octubre • 345 km" | **345 km sospechoso** — Roma-Florencia es ~275 km por A1 |
| 1329 | 14 | Duración | "8:30 AM Sale el bus hacia Florencia (~3.5h)" | — |
| 1331 | 14 | Tour incluido | "12:30-2:30 PM TOUR A PIE INCLUIDO: Duomo, Campanario Giotto, Baptisterio, Ponte Vecchio, Santa Croce (~2h)" | — |
| 1332 | 14 | Horario | "2:30-7:30 PM TARDE LIBRE 5 HORAS ... Mercado San Lorenzo (CUERO) + Piazzale Michelangelo" | ✔ 5h coherente |
| 1333 | 14 | Comida/precio | "Compartir Bistecca alla Fiorentina (~€45-50 para 3-4 personas)" | Precio bajo para bistecca 1kg+; verificable |
| 1334 | 14 | Transporte/precio | "9:30 PM Regreso al hotel a pie o taxi (~€8-10)" | — |
| 1340 | 14 | Horario/comida | "1 PM → Lampredotto (sándwich florentino ~€5) o Trattoria Mario (€8-12)" | **CONTRADICE L1331**: a la 1 PM están en el tour a pie (12:30-2:30) |
| 1340 | 14 | Compras/precio | "CUERO en Mercado San Lorenzo. Chaquetas €80-150, bolsos €30-60 ... Etiqueta 'Vera Pelle' = cuero real." | Precios y garantía de "Vera Pelle" verificables |
| 1340 | 14 | Mirador | "Piazzale Michelangelo: MEJOR vista panorámica Florencia. GRATIS." | — |
| 1342 | 14 | Comida/precio | "Bistecca alla Fiorentina (chuletón 1kg+, ~€45-50 para 3-4)" | Repite L1333 |
| 1343 | 14 | Presupuesto | "Llevar: ~€50-80/persona. Almuerzo (~€8) ... cena (~€15-20)." | — |
| 1346 | 14 | Afirmación | "Florencia es TODA peatonal y compacta — todo se camina en 15-20 min." | Simplificación (ZTL ≠ peatonal total) |
| 1352 | 15 | Fecha/distancia | "Florencia → Pisa → Costa Azul • Domingo 18 de Octubre • 451 km" | — |
| 1357 | 15 | Duración | "8:00 AM Sale el bus hacia Pisa (~1.5h)" | — |
| 1358 | 15 | Horario | "~9:30 AM Pisa ~1 HORA libre" | — |
| 1359 | 15 | Duración | "10:30 AM Bus hacia Costa Azul (~5-6h)" | — |
| 1361 | 15 | Horario | "5:30-8:00 PM TIEMPO LIBRE 2.5 HORAS" | ✔ |
| 1363 | 15 | Excursión/duración | "8 PM-12:30 AM Mónaco + Montecarlo de noche (4 horas)" | **Error aritmético**: 8 PM→12:30 AM = 4.5 horas |
| 1367 | 15 | Duración | "Pisa = ~1 hora ... torre, catedral y baptisterio se ven en 30-40 min" | — |
| 1369 | 15 | Clima/geografía | "Costa Azul ... Niza (la más grande), Cannes ... y Mónaco ... En octubre ... (~18°C)" | Temperatura verificable |
| 1373 | 15 | Excursión/precio | "Tour: Mónaco y Montecarlo — $93/pp ($465 familia)" | 93×5=465 ✔ |
| 1373 | 15 | Atracciones | "Museo Oceanográfico, Catedral, Palacio del Príncipe, Casino de Montecarlo, circuito de Fórmula 1" | — |
| 1375 | 15 | Duración | "Duración: 4 horas (8 PM - 12:30 AM)" | **Repite el error**: son 4.5 h |
| 1376 | 15 | Dato factual | "Un país de 2 km² ... familia real Grimaldi" | ~2.08 km², plausible |
| 1377 | 15 | Ahorro | "🚶 Solos — Ahorro: $410" | **No cuadra limpio**: tour $465 − tren (~€25 familia) ≈ $437 |
| 1378 | 15 | Transporte/precio | "toman un tren que cuesta ~€4-5 por persona y tarda 20 minutos" | Precio/duración Niza→Mónaco verificables |
| 1379 | 15 | Precio entrada | "las salas de juego cuestan €17 entrada y hay que ir elegante" | **€17 sospechoso** — la tarifa del Casino de Monte-Carlo cambió |
| 1386 | 15 | Presupuesto | "Llevar: ~€40-50/persona. Almuerzo Pisa (~€8), tren Mónaco (~€5), cena (~€15)." | — |
| 1390 | 15 | Transporte/horario | "tren desde Niza (~20 min, salen cada 15-30 min hasta ~11 PM). Último tren de vuelta ~11:30 PM." | Frecuencia dominical nocturna es menor; verificar |
| 1395 | 16 | Fecha/distancia | "Costa Azul → Barcelona • Lunes 19 de Octubre • 660 km" | — |
| 1400 | 16 | Duración | "7:30 AM Sale el bus hacia Barcelona (~8-9h de viaje)" | 7:30 AM + 8-9h = 15:30-16:30; L1402 dice ~5:00 PM. Leve desfase |
| 1402 | 16 | Horario | "~5:00 PM Llegan a Barcelona" | Ver L1400 |
| 1403 | 16 | Tour incluido | "5:30-7:00 PM BREVE VISITA INCLUIDA: Sagrada Familia (exterior), Plaza Cataluña, Colón (~1.5h)" | — |
| 1409 | 16 | Idioma | "'vale'=OK, 'tío'=amigo, 'móvil'=celular, 'patatas'=papas" | — |
| 1410 | 16 | Regla comercial | "LUNES: Tiendas abren con horario normal en Barcelona." | Verificar; muchos comercios pequeños abren tarde los lunes |
| 1411 | 16 | Comida/precios | "Patatas bravas €4, croquetas €5, jamón ibérico €8 ... menú del día: ... por €11-15/pp. MEJOR deal de Europa." | Precios probablemente desactualizados a la baja; superlativo |
| 1412 | 16 | Estafa/lugares | "Barcelona = #1 Europa en carteristas 📍 Las Ramblas, metro L1/L3, Plaça Catalunya" | Superlativo verificable |
| 1414 | 16 | Dato factual | "Sagrada Familia: Lleva en construcción desde 1882 (140+ años). Se espera terminarla en 2026 — JUSTO cuando ustedes llegan." | **ALTA sospecha** — 2026 es la fecha objetivo solo de la Torre de Jesucristo, no de la obra completa |
| 1414 | 16 | Dato factual | "Gaudí ... fue atropellado por un tranvía y nadie lo reconoció porque parecía mendigo." | Verificable |
| 1414 | 16 | Idioma | "Barcelona: Idioma oficial es catalán, no español." | **Incorrecto probable** — catalán y castellano son cooficiales |
| 1414 | 16 | Superlativo | "Madrid: Es la capital EUROPEA más alta (667 msnm). Tiene el cielo más limpio de todas las capitales de Europa." | **Dos superlativos dudosos** — Andorra la Vella (~1.023 m) es más alta |
| 1414 | 16 | Dato histórico | "Toledo: Fue capital de España antes que Madrid (hasta 1561)." | Fecha verificable |
| 1417 | 16 | Horarios | "Almuerzan a las 2-3 PM. Cenan a las 9-10 PM." | — |
| 1418 | 16 | Regla | "Siesta: Muchas tiendas cierran 2-5 PM (en pueblos pequeños)." | — |
| 1421 | 16 | Propina | "Propina: 5-10% si el servicio fue bueno." | Alto para España; sospecha |
| 1437 | 16 | Idioma | "'coger' en España significa tomar/agarrar" | — |
| 1442 | 16 | Presupuesto | "Llevar: ~€30-40/persona. Cena tapas (~€10-15/pp)." | — |
| 1451 | 17 | Fecha/distancia | "Barcelona → Zaragoza → Madrid • Martes 20 de Octubre • 620 km" | ~635 km real; cercano |
| 1456 | 17 | Duración | "8:00 AM Sale el bus hacia Zaragoza (~3.5h)" | — |
| 1457 | 17 | Atracción/duración | "~11:30 AM Zaragoza - Basílica del Pilar ~45 MIN" | — |
| 1458 | 17 | Duración | "12:15 PM Bus hacia Madrid (~3.5h)" | 12:15+3.5h = 15:45; L1459 dice ~4:00 PM ✔ |
| 1460 | 17 | Horario/tienda | "4:30-9:00 PM NOCHE LIBRE 4.5 HORAS Primark Gran Vía (5 pisos), Zara, compras" | "5 pisos" verificable |
| 1461 | 17 | Restaurante | "9:00 PM Cena: 100 Montaditos o bocadillo de calamares en Plaza Mayor" | — |
| 1463 | 17 | Incluido | "Zaragoza: Basílica del Pilar (impresionante, gratis)." | Basílica gratis pero torre/museo cobran |
| 1466 | 17 | Precio | "100 Montaditos (mini-sándwiches €1-2 c/u) o bocadillo de calamares en Plaza Mayor (~€3.50)" | **Precios probablemente viejos** (100 Montaditos subió; bocadillo ~€5) |
| 1467 | 17 | Tiendas/precio | "Zara, Mango, Bershka son ESPAÑOLAS = 20-30% más barato. Primark Gran Vía = 5 pisos, ropa desde €3." | Porcentaje sin fuente |
| 1468 | 17 | Presupuesto | "Llevar: ~€40-60/persona. Cena (~€10) + compras." | — |
| 1471 | 17 | Hotel | "Hotel en zona de Madrid (2 noches: Días 17 y 18)." | — |
| 1477 | 18 | Fecha | "Madrid - Tour + Toledo • Miércoles 21 de Octubre • ÚLTIMO DÍA" | — |
| 1483 | 18 | Tour incluido | "9:30-12:30 TOUR PANORÁMICO MADRID: Plaza España, Gran Vía, Cibeles, Puerta Alcalá, Plaza Mayor" | — |
| 1484 | 18 | Comida/precio | "12:30-1:30 PM Almuerzo rápido 1 HORA Menú del día en La Latina (~€12)" | — |
| 1486 | 18 | Excursión/duración | "2:30-7:30 PM Toledo con guía: paseo + Catedral + damasquinado (6 horas total incluyendo viaje)" | **Inconsistencia**: la fila marca 2:30-7:30 = 5 h, pero dice 6 h; con salida 1:30 PM (L1485) sí son 6 h |
| 1490 | 18 | Traslado | "10:30 PM SALIDA AL AEROPUERTO de Madrid Barajas (traslado incluido en el tour)" | **Contradice L1504** ("Si no alcanza ... tomen Uber/taxi") |
| 1494 | 18 | Excursión/precio | "Toledo — $83/pp ($415)" + "6h. Ciudad medieval Patrimonio Humanidad." | 83×5=415 ✔ |
| 1497 | 18 | Restaurantes/precio | "Menú del día en La Latina/Lavapiés (€11-14/pp con TODO) o Mercado San Miguel (tapas gourmet €3-8)" | — |
| 1498 | 18 | Regla fiscal | "Tax Free: Compras > €90.16 en una tienda → ... recuperan 10-15%. Busquen mostrador DIVA/Global Blue" | **€90.16 es el umbral antiguo** — España eliminó el mínimo (verificar) |
| 1499 | 18 | Presupuesto | "Llevar: ~€50-70/persona. Toledo pagado. Almuerzo (~€8), cena (~€15)" | — |
| 1502 | 18 | Duración | "Después del tour de Madrid, bus a Toledo (~1h)." | — |
| 1503 | 18 | Vuelo/horario | "el vuelo sale a la 01:45 AM, así que tienen que ir al aeropuerto a las ~10 PM" | — |
| 1504 | 18 | Transporte/precio | "tomen Uber/taxi (~€30-40 al aeropuerto de Barajas)" | **Tarifa fija oficial de taxi Madrid-Barajas es €33** (verificar) |
| 1508 | 19 | Fecha | "Madrid → Lima • Jueves 22 de Octubre • Vuelta a casa" | — |
| 1513 | 19 | Terminal | "~11:00 PM Llegan al aeropuerto Madrid Barajas T4S" | **T4S es satélite** — el check-in se hace en T4, no en T4S |
| 1514 | 19 | Tax Free | "11:00-11:30 PM Tax Free: Mostrador DIVA/Global Blue ANTES de despachar maletas" | Verificar disponibilidad del mostrador a esa hora |
| 1516 | 19 | Vuelo | "01:45 AM ✈️ Vuelo IB6660 Madrid → Lima (directo, 11h 45min, operado por LATAM)" | **ALTA sospecha**: número IB (Iberia) + "operado por LATAM" es combinación inusual; verificar nº de vuelo, horario y duración |
| 1517 | 19 | Llegada | "06:30 AM 🏠 Llegada a Lima Jorge Chávez" | Aritmética horaria coherente (01:45 CEST +11:45 = 06:30 Lima) |
| 1519 | 19 | Advertencia | "El vuelo sale a la 01:45 AM del jueves 22 ... estar en el aeropuerto a las ~11:00 PM del MIÉRCOLES 21" | ~2h45 antes de un vuelo intercontinental: ajustado |
| 1520 | 19 | Vuelo (repetición) | "01:45 AM — Vuelo IB6660 Madrid → Lima (directo, 11h 45min, operado por LATAM)" | 2ª mención idéntica |
| 1524 | 19 | Vuelo (repetición) | "Vuelo: IB6660, Madrid Barajas → Lima Jorge Chávez. Directo, 11h 45min. Operado por LATAM." | 3ª mención idéntica |
| 1526 | 19 | Migraciones | "Migraciones de entrada a Perú (cola 'Nacionales/Peruanos')" | — |



---

## Inventario: audit-04-finales-js.md

# Auditoría de datos — PLAN_EUROPA_2026.html (bloque final + JavaScript)

Archivo: `C:\Users\Andrew\Desktop\PARA VIAJE EUROPA\PLAN_EUROPA_2026.html`
Rango auditado: líneas 1518 → 1830 (fin de archivo) + bloques cruzados 413-419 (modal emergencias) y 486-513 (sidebar), necesarios para las verificaciones pedidas.

> **Nota de numeración:** el archivo tiene 1829 líneas (LF puro, sin CR). Las líneas de este informe son las **canónicas** (grep/python/editor). La herramienta Read del agente mostró un desfase de **-3** a partir de la línea 1528 (Read 1525 = canónica 1528). Si el orquestador cita líneas leídas con Read en este tramo, sumar +3.

---

## Tabla de inventario

| Línea | Sección | Tipo | Dato (cita exacta breve) | Sospecha |
|---|---|---|---|---|
| 1518 | Día 19 — horario | Hora | `11:30 PM` Check-in + despacho maletas + migraciones | Sin sospecha. Coherente con 1522 (`~11:00 PM del MIÉRCOLES 21`) aunque 1522 dice 11:00 y 1518 dice 11:30 — **inconsistencia menor de 30 min** |
| 1519 | Día 19 — horario | Vuelo / código | `Vuelo IB6660` Madrid → Lima (directo, 11h 45min, operado por LATAM) | Código de vuelo IB (Iberia) "operado por LATAM" — codeshare plausible pero verificable; no verificado |
| 1519 | Día 19 — horario | Hora | `01:45 AM` salida Madrid | Sin sospecha |
| 1520 | Día 19 — horario | Hora / lugar | `06:30 AM` **Llegada a Lima** Jorge Chávez | Coherente: 01:45 CEST + 11h45 = 06:30 Lima (UTC-5). Aritmética OK |
| 1522 | Día 19 — tip | Fecha/hora | `01:45 AM del jueves 22` … `~11:00 PM del MIÉRCOLES 21` (Día 18) | **Confirma que las tarjetas (jue 22 / mié 21) son correctas y el sidebar está corrido** |
| 1524 | Día 19 — tip | Servicio | `Mostrador DIVA/Global Blue` (Tax Free) | DIVA es el sistema italiano; en Madrid el sistema es DIVA (España) — nombre ambiguo, revisar |
| 1525 | Día 19 — pocket | Precio | `Llevar: ~€20-30/persona.` | Sin sospecha |
| 1527 | Día 19 — logística | Vuelo / aeropuertos | `IB6660, Madrid Barajas → Lima Jorge Chávez. Directo, 11h 45min. Operado por LATAM.` | Duplica 1519 — riesgo de desincronización si se edita uno solo |
| 1528 | Día 19 — logística | Servicio | `Tax Free: busquen mostrador DIVA/Global Blue ANTES de despachar maletas` | Duplica 1524 |
| 1529 | Día 19 — logística | Hora | `Llegada a Lima: 6:30 AM hora de Lima` | Coherente con 1520 |
| 1531 | Día 19 | JS handler | `onclick="shareDay(19)"` | OK, `shareDay` definido en 1757 |
| 1541 | Momentos Inolvidables | Texto | `El tour pone las ciudades…` (sec-sub) | Sin sospecha |
| 1544 | Momentos — rituales | Cálculo | `un mini-documental de 95 segundos` (19 días × 5 s) | Aritmética OK |
| 1545 | Momentos — rituales | Cálculo / monedas | `guarden una moneda de cada país (libra, euro, franco)` … `un frasco con 9 países adentro` | **9 países pero solo 3 monedas listadas**; además el itinerario toca >9 países (UK, FR, LU, DE, CH, LI, AT, IT, MC, ES, Vaticano). Revisar el conteo "9 países" |
| 1546 | Momentos — rituales | Precio | `compren UNA postal (€1-2)` | Sin sospecha |
| 1547 | Momentos — rituales | Cálculo | `19 días × 5 personas = 95 recuerdos` | Aritmética OK |
| 1552 | Momentos — fotos | Lugares | `el Big Ben, la Torre Eiffel, el Coliseo, la Sagrada Familia... 9 países` | Repite el "9 países" |
| 1553 | Momentos — fotos | Regla | `un atardecer por ciudad SIN celulares los primeros 5 minutos` | Sin sospecha |
| 1559 | Momentos dorados | Hora / lugar | `D2-3 Londres: atardecer desde el puente de Westminster … (~6:15 PM en octubre)` | Hora estimada de atardecer no verificada; varía mucho entre 5 y 25 de oct |
| 1560 | Momentos dorados | Hora / evento | `D5 París: a las 8:00 PM en punto, la Torre Eiffel DESTELLA 5 minutos` | El destello depende de la hora del anochecer (variable); "8:00 PM en punto" es afirmación dura. No verificado |
| 1561 | Momentos dorados | Altura | `D9 Suiza: en la cima del Titlis… A 3,000 metros` | Cifra redondeada (Titlis ~3.020-3.238 m). Aceptable |
| 1562 | Momentos dorados | Referencia día | `D10 Venecia 🎂` | Coherente: tarjeta D10 = Munich→Innsbruck→Verona→Venecia + QUINCEAÑERA |
| 1563 | Momentos dorados | Ritual | `D12 Roma: moneda a la Fontana di Trevi CON LA MANO DERECHA por encima del hombro izquierdo` | Coherente con tarjeta D12 (Roma-Vaticano) |
| 1564 | Momentos dorados | Tiempo | `D14 Florencia … La caminata sube 15 min` | Coherente con tarjeta D14 (Roma→Florencia) |
| 1565 | Momentos dorados | Precio | `D18 Madrid/Toledo … brindis familiar (aunque sea con agua €2 😅)` | Coherente con tarjeta D18 |
| 1568 | Momentos — tip | Precio | `Nada de esto cuesta más de €5.` | Contradice parcialmente 1525 (`~€20-30/persona` día 19) pero se refiere solo a rituales. OK |
| 1569 | Momentos — tip | Servicio | `suban las fotos del día a Google Fotos con el WiFi del hotel` | Sin sospecha |
| 1575 | Frases | Título | `Frases Esenciales` | — |
| 1576 | Frases | Servicio | `Google Translate con cámara traduce letreros en tiempo real` | Sin sospecha |
| 1577 | Frases — inglés | Encabezado | `🇬🇧 Inglés (Londres + aeropuertos)` | — |
| 1579 | Frases — inglés | Traducción | Por favor → `Please` / `pliis` | Sin sospecha |
| 1580 | Frases — inglés | Traducción | Gracias → `Thank you` / `zenk iu` | Sin sospecha |
| 1581 | Frases — inglés | Traducción | No, gracias → `No, thank you` / `nou, zenk iu` | Sin sospecha |
| 1582 | Frases — inglés | Traducción | ¿Cuánto cuesta? → `How much?` / `jao mach?` | **Duplicado** de la línea 778 (otra tabla de frases anterior) |
| 1583 | Frases — inglés | Traducción | ¿Dónde está el baño? → `Where is the toilet?` / `wer is de toilet?` | **Duplicado** de línea 779 |
| 1584 | Frases — inglés | Traducción | La cuenta → `The bill, please` / `de bil, pliis` | Sin sospecha |
| 1585 | Frases — inglés | Traducción | Necesito ayuda → `I need help` / `ai niid jelp` | Sin sospecha |
| 1586 | Frases — inglés | Traducción | Me robaron → `I've been robbed` / `aiv bin robd` | **Duplicado** de línea 783 |
| 1587 | Frases — inglés | Traducción | Mesa para 5 → `Table for five` / `teibol for faiv` | **Duplicado** de línea 781. "5" coherente con familia de 5 |
| 1588 | Frases — inglés | Traducción | Agua gratis (del grifo) → `Tap water, please` / `tap uoter, pliis` | **Duplicado** de línea 782 |
| 1590 | Frases — francés | Encabezado | `🇫🇷 Francés (París, Luxemburgo, Mónaco)` | Luxemburgo: idiomas oficiales luxemburgués/francés/alemán — OK |
| 1592 | Frases — francés | Traducción | Buen día → `Bonjour` / `bon-YUUR` | Pronunciación "bon-YUUR" es discutible (sería "bon-ZHUR") |
| 1593 | Frases — francés | Traducción | Por favor → `S'il vous plaît` / `sil vu PLÉ` | **Duplicado** de línea 938 |
| 1594 | Frases — francés | Traducción | Gracias → `Merci` / `mer-SÍ` | **Duplicado** de línea 939 |
| 1595 | Frases — francés | Traducción | No, gracias → `Non, merci` / `non, mer-SÍ` | **Duplicado** de línea 940 |
| 1596 | Frases — francés | Traducción | ¿Cuánto cuesta? → `Combien?` / `combién?` | Sin sospecha |
| 1597 | Frases — francés | Traducción | Déjeme en paz → `Laissez-moi tranquille` / `lesé-muá tran-KÍL` | **Duplicado** de línea 945 |
| 1599 | Frases — italiano | Encabezado | `🇮🇹 Italiano — muy parecido al español, el más fácil` | — |
| 1601 | Frases — italiano | Traducción | Buenos días → `Buongiorno` / `buon-YIORNO` | Sin sospecha |
| 1602 | Frases — italiano | Traducción | Gracias → `Grazie` / `GRA-tsie` | **Duplicado** de línea 1217 |
| 1603 | Frases — italiano | Traducción | ¿Cuánto cuesta? → `Quanto costa?` / `cuanto COSTA?` | Sin sospecha |
| 1604 | Frases — italiano | Traducción | La cuenta → `Il conto` / `il CONTO` | Sin sospecha |
| 1605 | Frases — italiano | Traducción | Déjeme en paz → `Mi lasci in pace` / `mi LASHI in PA-che` | **Duplicado** de línea 1223 |
| 1607 | Frases — alemán | Encabezado | `🇩🇪 Alemán — casi todos hablan inglés, pero ayuda` | — |
| 1609 | Frases — alemán | Traducción | Gracias → `Danke` / `DAN-ke` | **Duplicado** de línea 1025 |
| 1610 | Frases — alemán | Traducción | ¿Habla inglés? → `Sprechen Sie Englisch?` / `SHPRÉJEN si ÍNGLISH?` | **Duplicado** de línea 1027 |
| — | Frases | **Omisión** | No hay tabla de **español** (Barcelona/Madrid) ni de **catalán**, ni de **neerlandés** | Aceptable (familia hispanohablante) |
| 1620 | Emergencias | Teléfono | `🚨 EMERGENCIA` → `112` — nota `TODA Europa, incluso sin chip` | **NO es enlace `tel:`** en esta tabla (sí lo es en el modal, línea 413) |
| 1621 | Emergencias | Teléfono | `Policía UK` → `999` — nota `Solo Londres` | **Sospecha alta:** 999 funciona en TODO el Reino Unido, no "solo Londres". Nota engañosa |
| 1622 | Emergencias | Teléfono / embajada | `Embajada Perú UK` → `+44 20 7235 1917` — `Londres` | Coincide dígito a dígito con `tel:+442072351917` (línea 415) ✅ |
| 1623 | Emergencias | Teléfono / embajada | `Embajada Perú Francia` → `+33 1 53 10 42 50` — `París` | Coincide con `tel:+33153104250` (línea 416) ✅ |
| 1624 | Emergencias | Teléfono / embajada | `Embajada Perú Italia` → `+39 06 8440 1581` — `Roma` | ⚠️ **MISMATCH** con `tel:+39068440158` (línea 417): al `tel:` le falta el último dígito `1` |
| 1625 | Emergencias | Teléfono / embajada | `Embajada Perú España` → `+34 91 431 4242` — `Madrid` | Coincide con `tel:+34914314242` (línea 418) ✅ |
| 1626 | Emergencias | **PII de terceros** | `Agente Atrápalo` → `0810-345-0014` — nota `Anahí Guerrero` | **Nombre completo + teléfono de una persona identificable.** Además el número es formato nacional argentino (0810), **no marcable desde Perú ni Europa** — el propio documento lo advierte en línea 691 pero **aquí no** |
| 1628 | Emergencias — tip | Procedimiento | `Si pierden pasaporte: 1) Denuncia en comisaría ("police report") 2) Llamen embajada peruana 3) Dan documento de emergencia` | Sin sospecha |
| 1634 | Calendario | Título | `Calendario Mes a Mes` | — |
| 1635 | Calendario | Fecha | `El viaje es en octubre 2026.` | Sin sospecha |
| 1638 | Calendario | Fecha límite | `YA (si aún no lo hicieron)` — `Verificar pasaportes` — `válidos hasta abril 2027 mínimo` | Aritmética OK (fin de viaje 22-oct-2026 + 6 meses = 22-abr-2027). Institución citada: `Migraciones Perú` |
| 1639 | Calendario | Fecha límite / precio | `Septiembre 2026` — `Tramitar ETA para UK` — `Cuesta ~£20/persona (~$25)` | ⚠️ **Contradice línea 1651** que dice `ETA £20 ≈ $27`. Además con la tasa GBP→USD 1.33 del propio JS (línea 1740), £20 = **$26.6**, no $25 |
| 1640 | Calendario | Fecha / **URL** | `Septiembre 2026` — `Verificar si ETIAS ya está activo` — `~€7/persona` — `Verificar en etiasvisa.com` | ⚠️ **`etiasvisa.com` NO es el dominio oficial de la UE** (el oficial sería travel-europe.europa.eu / europa.eu). Es un sitio comercial de terceros. Riesgo de sobrecosto/phishing. No verificado en web, pero el dominio no es .europa.eu |
| 1641 | Calendario | Fecha / precio | `AHORA (Julio-Agosto 2026)` — `Comprar seguro de viaje` — `~$60-100/persona por 19 días (plan básico; mayores de 60-65 pagan más)` | Enlace interno `<a href="#seguro">` |
| 1642 | Calendario | Fecha / servicio | `Julio 2026` — `Comprar eSIM (Holafly/Airalo)` | Fecha ya en curso (hoy 30-jul-2026) — la fila está **vencida/al límite** |
| 1643 | Calendario | Fecha / comercios | `Agosto 2026` — `adaptador de enchufe, riñonera, power bank` — `En Lima hay en el Centro/Wong/Ripley` | Nombres de comercios peruanos (Wong, Ripley). Sin sospecha |
| 1644 | Calendario | Fecha / servicio | `Agosto 2026` — `Google Maps + Google Translate` offline | Sin sospecha |
| 1645 | Calendario | Fecha | `Septiembre 2026` — `Avisar al banco que viajan + verificar tarjetas` | **Duplica** contenido de línea 558 |
| 1646 | Calendario | Fecha | `Septiembre 2026` — `Comprar ropa de abrigo si les falta` | **Duplica** contenido de línea 606 |
| 1647 | Calendario | **Fecha límite** | `2 semanas antes (Sep 20)` — `Confirmar excursiones con Atrápalo` — `no se pueden agregar con menos de 18 días de anticipación` | 🚨 **CONTRADICCIÓN CRÍTICA:** la línea 643 dice `18 días antes = ~16 de septiembre. Después de esa fecha NO pueden agregar excursiones.` Esta fila fija el recordatorio en **Sep 20 = 4 días DESPUÉS del plazo**. La propia celda se autocontradice (dice "2 semanas" y "18 días" en la misma fila) |
| 1648 | Calendario | Fecha | `1 semana antes` — `Imprimir documentos + fotocopias` — `fotocopias pasaportes x2` | Sin sospecha |
| 1649 | Calendario | Fecha | `1 día antes` — `Preparar mochila de mano + revisar checklist` | Sin sospecha |
| 1651 | Calendario — tip | Precio / trámite | `ETA £20 ≈ $27; ETIAS €7 ≈ $8` — total `~$27-35 total por persona` | ETIAS €7×1.14 = $7.98 ✅. **Pero el total "$27-35" contradice el "~$25" de la línea 1639** |
| 1651 | Calendario — tip | Sistema fronterizo | `Sistema EES: Desde 2025-2026 … foto y huellas digitales. Es GRATIS` — `A ustedes les tocará en el ferry de Dover (Día 4)` | Coherente con tarjeta D4 (Londres→Ferry→París). Afirmación normativa no verificada |
| 1657 | Checklist | Título | `Checklist Pre-Viaje` / sec-label `Para marcar` | ⚠️ Los ítems son `<li>`, **no hay checkboxes ni persistencia** — el label "Para marcar" promete algo que la UI no da |
| 1659 | Checklist — Documentos | Cantidad / precio | `Pasaportes vigentes (5)`, `ETA para UK (~£20/pp)`, `Seguro de viaje (~$60-100/pp)`, `Fotocopias pasaportes (2 c/u)`, `Fotos pasaporte extras (2 c/u)`, `Google Drive` | "(5)" coherente con familia de 5 |
| 1660 | Checklist — Tecnología | Apps / specs | `eSIM (Holafly/Airalo)`, `Google Maps offline (10 ciudades)`, `Google Translate offline (EN,FR,IT,DE)`, `Power bank 10,000 mAh`, `App Uber instalada` | ⚠️ `10 ciudades` — el itinerario visita más de 10 localidades (Londres, París, Versalles, Luxemburgo, Frankfurt, Heidelberg, Zurich, Lucerna, Vaduz, Munich, Innsbruck, Verona, Venecia, Roma, Florencia, Pisa, Costa Azul, Barcelona, Zaragoza, Madrid, Toledo). Cifra baja |
| 1661 | Checklist — Ropa | Ítems | `Chaqueta impermeable`, `Abrigo grueso (Suiza/Alemania)`, `3 camisetas térmicas`, `2-3 suéteres/hoodies`, `Guantes + gorro (Titlis)`, `Riñonera antirrobo` | Sin sospecha |
| 1662 | Checklist — Salud/dinero | Precio / ítems | `Botiquín (paracetamol, antidiarreico, curitas)`, `USD efectivo (~$200/pp respaldo)`, `2 tarjetas crédito/débito` | Sin sospecha |
| 1669 | Apps | Título | `Apps Recomendadas` | — |
| 1674 | Apps — navegación | App | `Google Maps` — `ESENCIAL` — mapas OFFLINE | Sin sospecha |
| 1675 | Apps — navegación | App | `Citymapper` — `RECOMENDADA` — `Londres, París, Roma, Madrid, Barcelona` | Sin sospecha |
| 1676 | Apps — navegación | App | `Maps.me` — `BACKUP` | App con historial de cambios de propietario/rebranding; no verificado |
| 1681 | Apps — dinero | App | `Google Translate` — `ESENCIAL` — offline `(EN, FR, IT, DE)` | Sin sospecha |
| 1682 | Apps — dinero | App / precio | `XE Currency` — `Escriben €15 y les dice cuánto es en soles` | Sin sospecha |
| 1683 | Apps — dinero | App / servicio financiero | `Revolut` — `OPCIONAL` — `múltiples monedas sin comisiones` | ⚠️ **"sin comisiones" es falso en absoluto** (Revolut cobra fuera de horario de mercado y sobre el límite del plan gratis). Afirmación demasiado tajante |
| 1688 | Apps — comida | App | `Too Good To Go` — `NO DISPONIBLE EN PERÚ` — alternativa: `Lidl, Aldi, Carrefour, Sainsbury's` + `"menú del día" (€12-15)` | ⚠️ Sainsbury's solo existe en UK; Lidl/Aldi/Carrefour no cubren todos los países del itinerario. Precio menú del día €12-15 es de gama baja para Francia/Suiza |
| 1689 | Apps — comida | App / descuento | `TheFork` — `descuentos de hasta 50%` — `(como la quinceañera)` | "hasta 50%" es claim de marketing |
| 1694 | Apps — transporte | App | `Uber` — `Funciona en casi todas las ciudades` | ⚠️ Uber **no opera** en varias ciudades del itinerario (p. ej. restricciones en Italia — solo Uber Black; nada en Vaduz, Toledo, Pisa). Claim demasiado amplio |
| 1695 | Apps — transporte | App | `Bolt` — `ALTERNATIVA` — `Madrid, Barcelona, Roma` | Sin sospecha |
| 1696 | Apps — transporte | App | `GuruWalk` — `GRATIS` — `Solo pagas lo que quieras al final de propina` | Sin sospecha |
| 1701 | Apps — comunicación | App / precio | `Holafly o Airalo` — `~$30-45 USD por 19 días de datos` | Precio orientativo; Holafly ilimitado 19 días suele estar por encima. No verificado |
| 1702 | Apps — comunicación | App | `WhatsApp` — `Verifiquen que funcione con la eSIM` | Sin sospecha |
| 1705 | Apps — tip | Ranking | `Mi top 5 imperdibles: Google Maps + Google Translate + Citymapper + XE Currency + Holafly/Airalo` | Voz en 1ª persona ("Mi") en un documento familiar — inconsistencia de tono |
| 1709 | Footer | Resumen | `🌟 Familia • 19 Días • 9 Países • 1 Quinceañera Inolvidable 🌟` | ⚠️ **"9 Países"** vuelve a aparecer; el itinerario cruza más de 9 (ver 1545) |
| 1710 | Footer | Frase | `¡Que sea el viaje de sus vidas!` | — |
| 1711 | Footer | **Fecha** | `📅 Última actualización: 1 de Julio, 2026` | Hoy es 30-jul-2026 → el doc lleva ~1 mes sin actualizar y varias filas del calendario ya vencieron |
| 1712 | Footer | Fecha límite | `Próxima revisión programada: Septiembre 2026 (tramitar ETA UK, verificar estado ETIAS, confirmar excursiones, tipo de cambio)` | ⚠️ "confirmar excursiones" en **septiembre** vuelve a chocar con el plazo del 16-sep (línea 643) |
| 1713 | Footer | **Fecha de precios** | `Precios estimados en USD/EUR de abril 2026 • Sujetos a variación` | ⚠️ **Contradice 1711**: actualizado en julio pero precios de abril. Las tasas del JS (1738-1744) no dicen de qué fecha son |
| 1713 | Footer | Atribución | `Plan generado con Claude` | Sin sospecha |
| 1716-1723 | Lightbox | Markup / IDs | `id="lightbox"`, `id="lbCounter"` con texto inicial `1 / 1`, `id="lbCaption"` con `—` | Contador hardcodeado `1 / 1` visible antes de abrir galería (cosmético) |
| 1725 | `<script>` | Apertura | `<script>` — único bloque JS del archivo | **No hay ningún otro `<script>`**: todo el JS vive en 1725-1826 |
| 1726-1735 | JS — progress bar | Constante hardcodeada | `if (h.scrollTop > 500) btnTop.classList.add('show')` | Umbral 500 px hardcodeado (cosmético) |
| 1738-1744 | JS — **tasas de cambio** | **Datos hardcodeados** | `const rates = { EUR: { PEN: 3.89, USD: 1.14, EUR: 1, GBP: 0.86, CHF: 0.92 }, …` | ⚠️ **Tasas fijas sin fecha ni fuente.** Ver desglose abajo |
| 1739 | JS — rates | Tasa | `EUR: { PEN: 3.89, USD: 1.14, EUR: 1, GBP: 0.86, CHF: 0.92 }` | Coherente internamente (1.14 × 3.42 = 3.90 ≈ 3.89) |
| 1740 | JS — rates | Tasa | `GBP: { PEN: 4.54, USD: 1.33, EUR: 1.17, GBP: 1, CHF: 1.07 }` | Coherente (1.33 × 3.42 = 4.55). **Choca con el "$25" de la línea 1639** |
| 1741 | JS — rates | Tasa | `CHF: { PEN: 4.22, USD: 1.24, EUR: 1.09, GBP: 0.93, CHF: 1 }` | Leve inconsistencia: 1.24 × 3.42 = 4.24, tabla dice 4.22 (~0.5%) |
| 1742 | JS — rates | Tasa | `USD: { PEN: 3.42, USD: 1, EUR: 0.88, GBP: 0.75, CHF: 0.81 }` | Coherente |
| 1743 | JS — rates | Tasa | `PEN: { PEN: 1, USD: 0.29, EUR: 0.26, GBP: 0.22, CHF: 0.24 }` | ⚠️ Redondeo a 2 decimales genera error de hasta ~1.3% (1/4.22 = 0.2370, la tabla dice 0.24) |
| 1745-1754 | JS — `updateCalc` | Símbolos hardcodeados | `'S/ '`, `'$ '`, `'€ '`, `'£ '`, `'CHF '` + `.toFixed(2)` | Sin sospecha. Wiring OK: `oninput="updateCalc()"` (línea 433) y `onchange` (434) |
| 1757-1765 | JS — `shareDay` | Texto hardcodeado | `` `🌍 *Plan Europa 2026 — Día ${num}*\n\n*${title}*\n${date}…` `` | El texto usa `day.querySelector('.date')` → comparte la fecha de la **tarjeta** (correcta), no la del tooltip |
| 1759 | JS — `shareDay` | Selector | `day.querySelector('.day-info h2')?.textContent \|\| \`Día ${num}\`` | Sin sospecha |
| 1762 | JS — `shareDay` | URL | `window.location.origin + window.location.pathname + '#dia' + num` | ⚠️ Si el archivo se abre con `file://`, `origin` es `"null"` → el link compartido por WhatsApp será **inservible** (`null/C:/...#dia5`) |
| 1764 | JS — `shareDay` | **URL externa** | `https://wa.me/?text=${encodeURIComponent(text)}` | Único dominio externo del JS. Sin sospecha |
| 1768-1826 | JS — lightbox | Lógica | `lbImages`, `openGallery`, `showLightbox`, `closeLightbox`, `navLightbox`, swipe `> 50` px | Constante 50 px hardcodeada (cosmético) |
| 1806-1815 | JS — teclado | Teclas | `Escape`, `ArrowLeft`, `ArrowRight` | Sin sospecha |
| — | JS (todo el bloque) | **Ausencia** | **No existe ningún array, objeto ni bucle que genere los tooltips/etiquetas de los 19 días** | 🚨 Ver sección dedicada abajo |

---

## 🚨 Hallazgo 1 — Los 19 tooltips de días: NO los genera el JavaScript

**El reporte de "array de JS corrido un día" es incorrecto en cuanto al mecanismo.** Los 19 tooltips son **atributos `title=` estáticos escritos a mano en el HTML**, en el sidebar lateral derecho, **líneas 490 a 508**. El bloque `<script>` (1725-1826) no contiene ninguna estructura de días, fechas ni días de la semana.

**Pero el desfase de un día SÍ existe**, y afecta a los 19 tooltips.

| Día | Línea | Tooltip (sidebar, líneas 490-508) — día de semana que asigna el HTML | Línea tarjeta | Tarjeta del itinerario (`.date`) | Desfase |
|---|---|---|---|---|---|
| D1 | 490 | **Sáb** 4 Oct | 724 | 📅 **Domingo** 4 de Octubre | −1 día |
| D2 | 491 | **Dom** 5 Oct — Londres | 743 | 📅 **Lunes** 5 de Octubre | −1 día |
| D3 | 492 | **Lun** 6 Oct — Londres | 795 | 📅 **Martes** 6 de Octubre | −1 día |
| D4 | 493 | **Mar** 7 Oct — Ferry París | 838 | 📅 **Miércoles** 7 de Octubre | −1 día |
| D5 | 494 | **Mié** 8 Oct — París | 882 | 📅 **Jueves** 8 de Octubre | −1 día |
| D6 | 495 | **Jue** 9 Oct — Versalles | 966 | 📅 **Viernes** 9 de Octubre | −1 día |
| D7 | 496 | **Vie** 10 Oct — Luxemburgo | 993 | 📅 **Sábado** 10 de Octubre | −1 día |
| D8 | 497 | **Sáb** 11 Oct — Selva Negra | 1041 | 📅 **Domingo** 11 de Octubre | −1 día |
| D9 | 498 | **Dom** 12 Oct — Titlis | 1069 | 📅 **Lunes** 12 de Octubre | −1 día |
| D10 | 499 | **Lun** 13 Oct — QUINCEAÑERA | 1103 | 📅 **Martes** 13 de Octubre — 🎉 QUINCEAÑERA | −1 día |
| D11 | 500 | **Mar** 14 Oct — Venecia Roma | 1178 | 📅 **Miércoles** 14 de Octubre | −1 día |
| D12 | 501 | **Mié** 15 Oct — Roma Vaticano | 1246 | 📅 **Jueves** 15 de Octubre | −1 día |
| D13 | 502 | **Jue** 16 Oct — Roma libre | 1286 | 📅 **Viernes** 16 de Octubre | −1 día |
| D14 | 503 | **Vie** 17 Oct — Florencia | 1324 | 📅 **Sábado** 17 de Octubre | −1 día |
| D15 | 504 | **Sáb** 18 Oct — Pisa | 1352 | 📅 **Domingo** 18 de Octubre | −1 día |
| D16 | 505 | **Dom** 19 Oct — Barcelona | 1395 | 📅 **Lunes** 19 de Octubre | −1 día |
| D17 | 506 | **Lun** 20 Oct — Madrid | 1451 | 📅 **Martes** 20 de Octubre | −1 día |
| D18 | 507 | **Mar** 21 Oct — Toledo | 1477 | 📅 **Miércoles** 21 de Octubre | −1 día |
| D19 | 508 | **Mié** 22 Oct — Vuelta | 1508 | 📅 **Jueves** 22 de Octubre | −1 día |

**Los números de día del mes coinciden en los 19 casos; solo el nombre del día de la semana está corrido exactamente −1.**

**¿Cuál lado es el correcto?** Las **tarjetas**. Evidencia interna (sin consultar la web):
- Línea 1522: `El vuelo sale a la 01:45 AM del jueves 22 … tienen que estar en el aeropuerto a las ~11:00 PM del MIÉRCOLES 21 (Día 18)` — concuerda con las tarjetas D18=miércoles 21 y D19=jueves 22, y contradice el sidebar (mar 21 / mié 22).
- Los destinos de los tooltips (Titlis, Venecia, Pisa, Toledo…) **sí** coinciden con las tarjetas correspondientes, así que el error es exclusivamente el nombre del día de la semana.

**Corrección requerida:** en las líneas 490-508, avanzar cada día de la semana en +1 (Sáb→Dom, Dom→Lun, …). NO tocar los números de día del mes ni los destinos.

---

## 🚨 Hallazgo 2 — Verificación `tel:` vs texto visible

Los enlaces `tel:` **no están en el rango final**: viven en el modal de emergencias, **líneas 413-419**. La tabla de emergencias del rango auditado (1620-1626) repite los mismos números **sin enlaces `tel:`**, lo que duplica la fuente de verdad.

| Línea | `href` | Texto visible | ¿Coincide dígito a dígito? |
|---|---|---|---|
| 413 | `tel:112` | `📞 112` | ✅ |
| 414 | `tel:999` | `📞 999` | ✅ |
| 415 | `tel:+442072351917` | `📞 +44 20 7235 1917` | ✅ |
| 416 | `tel:+33153104250` | `📞 +33 1 53 10 42 50` | ✅ |
| **417** | **`tel:+39068440158`** | **`📞 +39 06 8440 1581`** | ❌ **NO** — al `href` le falta el dígito final `1` (9 dígitos vs 10). **Marcar el número desde el móvil llamaría a un número inexistente.** |
| 418 | `tel:+34914314242` | `📞 +34 91 431 4242` | ✅ |
| 419 | `tel:08103450014` | `📞 0810-345-0014` | ✅ dígitos, pero ⚠️ **sin código de país**: `tel:` de formato nacional argentino, no marcable desde Perú ni Europa |

Único mismatch real: **línea 417 (Embajada de Perú en Italia)**.

---

## 🚨 Hallazgo 3 — Datos personales de terceros (privacidad)

| Línea | Dato | Tipo |
|---|---|---|
| **1626** | `Anahí Guerrero` + `0810-345-0014` (Agente Atrápalo) | **Nombre completo + teléfono de una persona identificable** — dentro del rango auditado |
| 419 | `Agente Atrápalo — Anahí` + `tel:08103450014` | Nombre de pila + teléfono (fuera de rango, cross-check) |
| 643 | `contrátenlas con Anahí` | Nombre de pila (fuera de rango) |
| 688 | `Preguntas que DEBEN hacerle a Anahí (su agente)` | Nombre de pila (fuera de rango) |
| 690 | `Anahí (agente de Atrápalo) — Tel: 0810-345-0014, atiende 9 a 18 hs` | **Nombre + teléfono + horario laboral** (fuera de rango) |
| 691 | `Pídanle a Anahí su número en formato internacional (+54...) y su WhatsApp` | Instrucción a recolectar **más** datos personales (fuera de rango) |
| 710 | `Pregunten a Anahí (Atrápalo)` | Nombre de pila (fuera de rango) |

**Nota:** el apellido completo (`Guerrero`) aparece **solo en la línea 1626**. Si este HTML se comparte por WhatsApp (la función `shareDay` está pensada para eso) o se publica, se distribuye el nombre completo y el teléfono de trabajo de una tercera persona. **Recomendación: reducir a nombre de pila y/o eliminar el apellido de la línea 1626.**

No se detectaron correos electrónicos (corporativos ni personales) en todo el rango auditado. Único correo-like: ninguno. Únicos dominios: `etiasvisa.com` (1640) y `wa.me` (1764).

---

## Top 10 hallazgos más sospechosos

1. **Líneas 490-508** — Los 19 tooltips del sidebar tienen el día de la semana corrido −1 respecto de las tarjetas (y las tarjetas son las correctas, confirmado por la línea 1522). No es un bug de JS: son `title=` estáticos.
2. **Línea 417** — `tel:+39068440158` no coincide con el texto `+39 06 8440 1581`: falta un dígito. Llamada de emergencia a embajada que fallaría.
3. **Línea 1647** — "Confirmar excursiones **2 semanas antes (Sep 20)**" cuando la propia celda y la línea 643 dicen que el plazo es **18 días antes = 16 de septiembre**. El recordatorio llega 4 días tarde.
4. **Línea 1640** — `etiasvisa.com` como fuente para verificar ETIAS: no es dominio oficial de la UE. Riesgo de intermediario de pago / phishing.
5. **Línea 1626** — `Anahí Guerrero` + teléfono: PII de tercero en un documento pensado para compartirse por WhatsApp.
6. **Línea 1626 / 419** — `0810-345-0014` es formato nacional argentino, no marcable desde Perú ni Europa. El aviso existe en la línea 691 pero **no** en la tabla de emergencias ni en el modal.
7. **Línea 1639 vs 1651** — El costo del ETA aparece como `~$25` en una fila y `≈ $27` en el tip; las propias tasas del JS (línea 1740) dan $26.6.
8. **Líneas 1738-1744** — `const rates` con tasas hardcodeadas **sin fecha ni fuente**, mientras el footer (1713) dice que los precios son "de abril 2026" y el propio doc (1712) programa revisar el tipo de cambio en septiembre.
9. **Línea 1621** — `Policía UK 999 — Solo Londres`: nota falsa; 999 cubre todo el Reino Unido. Puede hacer dudar en una emergencia fuera de Londres.
10. **Línea 1762** — `window.location.origin` en `shareDay`: abierto como `file://` genera `null` y el link compartido por WhatsApp queda roto — que es precisamente el uso previsto del documento.

**Menciones honoríficas:** "9 Países" (1545/1552/1709) cuando el itinerario cruza más; "Google Maps offline (10 ciudades)" (1660) con >20 localidades; `Revolut … sin comisiones` (1683); `Uber … funciona en casi todas las ciudades` (1694); checklist etiquetado "Para marcar" sin checkboxes (1657); tabla de emergencias (1620-1626) sin enlaces `tel:` duplicando el modal (413-419).

---

**Total inventariado: 118 datos** (109 filas de la tabla principal + 19 tooltips de días auditados individualmente, con solapamiento contabilizado una sola vez).

