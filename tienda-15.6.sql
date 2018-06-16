-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 15-06-2018 a las 18:42:53
-- Versión del servidor: 10.1.9-MariaDB
-- Versión de PHP: 5.6.15

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

DROP DATABASE IF EXISTS TIENDA;
CREATE DATABASE TIENDA;
USE TIENDA;
/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `tienda`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `carrito`
--

CREATE TABLE `carrito` (
  `id` int(11) NOT NULL,
  `producto_id` int(11) NOT NULL,
  `cantidad` int(11) NOT NULL,
  `user_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Volcado de datos para la tabla `carrito`
--

INSERT INTO `carrito` (`id`, `producto_id`, `cantidad`, `user_id`) VALUES
(4, 2, 3, 32);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `productos`
--

CREATE TABLE `productos` (
  `id` int(10) NOT NULL,
  `nombre` varchar(70) COLLATE utf8_unicode_ci NOT NULL,
  `descripcion` varchar(1000) COLLATE utf8_unicode_ci NOT NULL,
  `precio` float NOT NULL,
  `type_id` int(11) NOT NULL,
  `descripcionCorta` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `image` varchar(250) COLLATE utf8_unicode_ci NOT NULL,
  `unidades` int(3) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Volcado de datos para la tabla `productos`
--

INSERT INTO `productos` (`id`, `nombre`, `descripcion`, `precio`, `type_id`, `descripcionCorta`, `image`, `unidades`) VALUES
(1, 'Carne de Boca de Vacuno, 2kg', 'La carne de vacuno es magra con altos niveles de proteína y de nutrientes como el potasio, hierro, calcio, magnesio y zink. La carne de boca, también llamada morro o labio de vacuno, es muy jugosa, firme y llena de nutrientes para los más exigentes. La parte externa es más clara y presenta pequeñas "espinillas", por la interior, se puede reconocer la carne roja, especialmente sabrosa perteneciente al músculo. Un absoluto placer para tu perro o gato.\r\n\r\nEste artículo viene cortado en virutas de tamaño medio, empaquetado al vacío y congelado a -18ºC durante mínimo 2 semanas. Debe ser suminstrado crudo.', 8.49, 1, 'Carne de vacuno magra. Debe ser suminstrado crudo.', 'images/carrito/1.jpg', 0),
(2, 'Carne de Vacuno, 500g', 'La carne de vacuno es una de las fuentes de proteína más rica en nutrientes. Tiene niveles muy altos de vitaminas del grupo B, fósforo, zinc y hierro. Son nutrientes esenciales para un sistema inmunitario sano (zinc), la vitalidad (hierro, vitaminas B) y un aparata locomotor fuerte (fósforo). La carne de vacuno también es rica en selenio conocido por sus beneficios anti-alérgicos y contra la artrosis y enfermedades del corazón. \r\n\r\nEste artículo viene picado de forma fina, empaquetado al vacío y congelado a -18ºC durante mínimo 2 semanas. Debe ser suminstrado crudo.', 2.49, 1, 'Tiene niveles muy altos de vitaminas grupo B, fósforo, zinc y hierro.', 'images/carrito/2.jpg', 100),
(3, 'Grasa de Calidad de Vacuno, 500g', 'Puede ser difícil de aceptar lo que es una de las verdades más fundamentales de la nutrición canina y felina: tu perro y tu gato necesitan grasas, y muchas de ellas!\r\n\r\nLas grasas:\r\n\r\nSon necesarias para la absorción de vitaminas liposolubles\r\nProporcionan protección contra el frío\r\nProtegen las fibras nerviosas en el cuerpo\r\nProporcionan más calorías por gramo y, por lo tanto, más energía que los carbohidratos o las proteínas\r\nMejoran el sabor y palatabilidad de los alimentos de tu perro o gato\r\nAyudan a saciar el apetito\r\nSon una excelente fuente de ácidos grasos esenciales\r\nSi queremos ayudar a que nuestros perros y gatos se mantengan fuertes y altamente saludables, las grasas animales tienen que formar parte de su dieta diaria.\r\n\r\nEste artículo viene picado, empaquetado al vacío y congelado a -18ºC durante mínimo 2 semanas. Sólo debe ser suministrado crudo.', 2.29, 1, 'Este artículo viene picado, empaquetado al vacío y congelado a -18ºC durante mínimo 2 semanas.', 'images/carrito/3.jpg', 100),
(4, 'Carne de Vacuno, 2kg', 'Os presentamos un puro placer de masticar: nuestra Carne de Vacuno sin picar. La carne de vacuno es una de las fuentes de proteína más rica en nutrientes. Tiene niveles muy altos de vitaminas del grupo B, fósforo, zinc y hierro. Son nutrientes esenciales para un sistema inmunitario sano (zinc), la vitalidad (hierro, vitaminas B) y un aparato locomotor fuerte (fósforo). La carne de vacuno también es rica en selenio conocido por sus beneficios anti-alérgicos y contra la artrosis y enfermedades del corazón. \r\n\r\nEsta carne es magra, si tu perro o gato tiende a perder peso te recomendamos añadir un 10% de grasa de calidad a su plato.\r\n\r\nEste artículo viene cortado en piezas grandes, empaquetado al vacío y congelado a -18ºC durante mínimo 2 semanas. ', 10.95, 1, 'La carne de vacuno también es rica en selenio conocido por sus beneficios anti-alérgicos', 'images/carrito/4.jpg', 100),
(5, 'Sangre de Vacuno, 250g', '¡No puede faltar en ningún menú BARF! El objetivo de la dieta BARF es una alimentación biológicamente apropiada que se orienta en la dieta de los lobos y gatos salvajes, los ancestros de nuestros perros y gatos. La carne que ellos comen no es desangrada si no contiene una buena cantidad de sangre, llena de nutrientes importantes para nuestros perros y gatos como proteínas, minerales, hierro, cobre, sodio y vitaminas.\r\n\r\n100 gramos de sangre de vacuno cubren la necesidad diaria total de hierro de un pastor alemán de 35 kilos (la necesidad diaria promedia de hierro es 1,4 miligramos por cada kilo de peso corporal; los gatos necesitan 1,5 miligramos de hierro al día).\r\n\r\nEste artículo viene porcionado, empaquetado al vacío y congelado a -18ºC durante mínimo 2 semanas. Debe ser suminstrado crudo.', 1.69, 1, '100 gramos de sangre de vacuno cubren la necesidad total de hierro de un pastor alemán de 35 kilos', 'images/carrito/5.jpg', 100),
(6, 'Mix de Vísceras de Vacuno, 500g', 'Te queremos presentar un mix completo de vísceras de vacuno. Ya no tienes que comprar diferentes vísceras, medirlas y trocearlas. Este mix consiste en 1/3 de corazón, 1/3 de hígado, 1/6 de bazo y 1/6 de riñones de vacuno ¡lista la parte diaria de carne de órgano de tu perro! \r\n\r\nEste artículo viene cortado en trozos, empaquetado al vacío y congelado a -18ºC durante mínimo 2 semanas.', 2.95, 1, 'Este artículo viene cortado en trozos, empaquetado al vacío y congelado a -18ºC', 'images/carrito/6.jpg', 100),
(7, 'Hígado de Vacuno, 500g', 'El hígado es una fuente excepcional de la vitamina B12, cobre, folato, riboflavina ¡un superalimento de proteína! Es una carne baja en grasa, que se puede ofrecer dos veces por semana. Por su cuadro de nutrientes, es altamente recomendado para perras lactantes y para perros en recuperación o convaleciente\r\n\r\nEs importante no sobre-dosificarla ya que puede tener un efecto laxante. Pasarlo brevemente a la plancha puede incrementar su atractivo en caso de no ser aceptado inmediatamente por nuestro perro o gato.\r\n\r\nEste artículo viene cortado en trozos, empaquetado al vacío y congelado a -18ºC durante mínimo 2 semanas.', 2.49, 1, 'El hígado es una fuente excepcional de la vitamina B12, cobre, folato, riboflavina', 'images/carrito/7.jpg', 100),
(8, 'Bazo de Vacuno, 500g', 'El bazo es el gran órgano linfático del organismo, es esponjoso y de consistencia suave. Debido al alto contenido en sangre, provee grandes cantidades de hierro junto a otros nutrientes importantes. En la preparación de las carnes comunes, a menudo se desangran bien las piezas, por este motivo y para recuperar parte de la sangre en la dieta es interesante sustituir el hígado y los riñones por bazo hasta dos veces por semana. Es perfecto para perros con gusto fino, así como para nuestros gatos.\r\n\r\nEste artículo viene cortado en dados, empaquetado al vacío y congelado a -18ºC durante mínimo 2 semanas. Solamente debe ser suminstrado crudo.', 2.29, 1, 'El bazo es el gran órgano linfático del organismo, es esponjoso y de consistencia suave.', 'images/carrito/8.jpg', 100),
(9, 'Mix de Pollo y Pescado con Hueso, 500g', 'Una rica mezcla de pollo (60%) y pescado (40%) que a tu animal le encantará. Al picar la carne del pollo se dejan incluidos sus huesos y el cartílago en su proporción natural (no se incluyen las vísceras) generando una mezcla sabrosa que sirve como base perfecta para un menú completo de BARF – ¡solo hace falta añadir la carne de órgano, las verduras, las frutas y el aceite!\r\n\r\nEl pollo es una carne ligera deliciosa, una de las favoritas de todos los perros y gatos de fácil digestión que contiene muchas vitaminas del grupo B y cantidades beneficiosas de hierro, zinc, fósforo, selenio y potasio.\r\n\r\nLos ácidos grasos esenciales que se encuentran en el pescado son particularmente importantes para la absorción de vitaminas solubles en grasa y para el mantenimiento de un pelo sano y brillante.\r\n\r\nEste artículo viene picado, empaquetado al vacío y congelado a -18ºC durante mínimo 2 semanas. Sólo debe ser suministrado crudo.', 2.95, 1, 'Una rica mezcla de pollo (60%) y pescado (40%) que a tu animal le encantará.', 'images/carrito/9.jpg', 100),
(10, 'Corazones de Pavo, 500g', 'La carne de pavo es especialmente tierna y magra, perfecta para todos los gatos, perros y hurones, desde los más pequeños hasta los más senior. Es carne rica en ácidos grasos, los cuales son cardiosaludables, ayudando a proteger la salud del corazón. Además tiene un contenido en colesterol muy bajo, es rica en vitaminas del grupo B y tiene un alto contenido en hierro. ¡A tu perro, gato o hurón le encantará, la perfecta alternativa al pollo!\r\n\r\nLos corazones de pavo son 3 veces más grandes que los de pollo - invitan a masticar. Para nuestros gatos son una fuente esencial de taurina.\r\n\r\nEste artículo viene en piezas enteras, empaquetado al vacío y congelado a -18ºC durante mínimo 2 semanas. Solamente debe ser suministrado crudo.', 2.49, 1, 'La carne de pavo es especialmente tierna y magra, perfecta para todos los gatos, perros y hurones', 'images/carrito/10.jpg', 100),
(11, 'Mix de Ave Picado con Hueso, 1kg', 'Con esta riquísima mezcla os queremos quitar 2 pasos en la preparación de vuestro menú BARF casero de encima. "Ave Picado" contiene carcasas de pollo y pavo y carne de órgano de pollo, todo bien picado. Simplemente se añada carne de músculo y verdura y fruta y ¡listo el plato casero básico BARF! \r\n\r\nEl pollo es una carne ligera deliciosa, una de las favoritas de todos los perros y gatos. Es una proteína de fácil digestión que contiene muchas vitaminas del grupo B y cantidades beneficiosas de hierro, zinc, fósforo, selenio y potasio. La carne de pavo es especialmente tierna y magra y una gran fuente del aminoácido calmante, triptófano.\r\n\r\nEste artículo viene picado, empaquetado al vacío y congelado a -18ºC durante mínimo 2 semanas. Sólo debe ser suministrado crudo.', 3.49, 1, '"Ave Picado" contiene carcasas de pollo y pavo y carne de órgano de pollo', 'images/carrito/11.jpg', 100),
(12, 'Pato Picado con Hueso, 500g', 'La base perfecta para un menú completo casero, ya que incluye huesos y vísceras de pato. La carne de pato es alta en grasa y contiene una muy alta proporción de importantes ácidos grasos de cadena larga. Además contiene vitamina A y todas las vitaminas del grupo B, minerales y oligoelementos como flúor, cobre, manganeso y zinc. También proporciona varios aminoácidos esenciales (esenciales significa que tienen que ser suministrados desde el exterior, dado que el organismo no es capaz de fabricarlos por sí mismo a partir de otros componentes de los alimentos), especialmente una alta concentración de lisina. La lisina es importante para el crecimiento y la producción de hormonas, enzimas y anticuerpos contra ciertas infecciones de virus.\r\n\r\nEste artículo viene picado, empaquetado al vacío y congelado a -18ºC durante mínimo 2 semanas. Sólo debe ser suministrado crudo.', 2.95, 1, 'La base perfecta para un menú completo casero', 'images/carrito/12.jpg', 100),
(13, 'Pollo Picado con Hueso, 500g', 'Carcasas muy carnosas de pollo (sin vísceras) picada de una manera extra fina – perfecta también para los gatos y razas pequeñas más exigentes. ¡Una mezcla sabrosa que sirve como base perfecta para un menú completo de BARF!\r\n\r\nEl pollo es una carne ligera deliciosa, una de las favoritas de todos los perros y gatos. Es una proteína de fácil digestión que contiene muchas vitaminas del grupo B y cantidades beneficiosas de hierro, zinc, fósforo, selenio y potasio.\r\n\r\nEste artículo viene picado muy fino, empaquetado al vacío y congelado a -18ºC durante mínimo 2 semanas. Sólo debe ser suministrado crudo.', 1.95, 1, 'Carcasas muy carnosas de pollo (sin vísceras) picada de una manera extra fina', 'images/carrito/13.jpg', 100),
(14, 'Cuellos de Pato Picados, 500g', 'La carne de pato es alta en grasa y contiene una muy alta proporción de importantes ácidos grasos de cadena larga. Además contiene vitamina A y todas las vitaminas del grupo B, minerales y oligoelementos como flúor, cobre, manganeso y zinc. La carne de pato también proporciona varios aminoácidos esenciales (esenciales significa que tienen que ser suministrados desde el exterior, dado que el organismo no es capaz de fabricarlos por sí mismo a partir de otros componentes de los alimentos), especialmente una alta concentración de lisina. La lisina es importante para el crecimiento y la producción de hormonas, enzimas y anticuerpos contra ciertas infecciones de virus.\r\n\r\nEste artículo viene picado, empaquetado al vacío y congelado a -18ºC durante mínimo 2 semanas. Sólo debe ser suministrado crudo.', 2.95, 1, 'La carne de pato es alta en grasa y contiene una muy alta proporción de importantes ácidos grasos', 'images/carrito/14.jpg', 100),
(15, 'Cuellos de Pollo, 1kg', 'Los cuellos de pollo crujientes están llenas de huesos blandos y cartílagos. A los perros les encanta e incluso los gatos disfrutan de ellos. Ideal para iniciar a tu amigo/a en su trayecto de una alimentación natural cruda completa y equilibrada. Igualmente perros con mucha experiencia en la alimentación natural cruda no se cansan nunca de una porción de cuellos de pollo. Contienen glucosamina y condroitina natural para articulaciones sanas.\r\n\r\nSupervisa a tu perro y gato siempre cuando juega con los huesos ya que en ocasiones pueden romper o astillarse.\r\n\r\nEste artículo viene empaquetado, en piezas separadas y congeladas a -18ºC durante mínimo 2 semanas. Sólo debe ser suministrado crudo.', 3.49, 1, 'Los cuellos de pollo crujientes están llenas de huesos blandos y cartílagos.', 'images/carrito/15.jpg', 100),
(16, 'Higaditos de Pavo, 500g', 'La carne de pavo es especialmente tierna y magra, perfecta para todos los gatos, perros y hurones, desde los más pequeños hasta los más senior. Es carne rica en ácidos grasos, los cuales son cardiosaludables, ayudando a proteger la salud del corazón. Además tiene un contenido en colesterol muy bajo, es rica en vitaminas del grupo B y tiene un alto contenido en hierro. ¡A tu perro, gato o hurón le encantará, la perfecta alternativa al pollo!\r\n\r\nLos hígados de pavo son 3 veces más grandes que los de pollo - invitan a masticar. \r\n\r\nEste artículo viene en piezas enteras, empaquetado al vacío y congelado a -18ºC durante mínimo 2 semanas. Solamente debe ser suministrado crudo.', 2.49, 1, 'La carne de pavo es especialmente tierna y magra, perfecta para todos los gatos, perros y hurones', 'images/carrito/16.jpg', 100),
(17, 'Pavo Picado con Hueso, 500g', 'Carcasas carnosas de pavo (sin vísceras) picadas de una manera fina – perfecta también para los gatos, hurones y razas pequeñas más exigentes. ¡Una mezcla sabrosa que sirve como base perfecta para un menú completo de BARF!\r\n\r\nEl pavo es una carne ligera deliciosa, una de las favoritas de todos los perros y gatos. Está llena del aminoácido triptófano que promueve la liberación del neurotransmisor serotonina, involucrado en la regulación del sueño y el placer. En pocas palabras: pocas carnes le harán sentir más feliz a tu perro, tu gato o tu hurón.\r\n\r\nEste artículo viene picado fino, empaquetado al vacío y congelado a -18ºC durante mínimo 2 semanas. Sólo debe ser suministrado crudo.', 2.29, 1, 'Carcasas carnosas de pavo (sin vísceras) picadas de una manera fina', 'images/carrito/17.jpg', 100),
(18, 'Carne de Pavo, 2kg', 'La carne de pavo es especialmente tierna y magra, perfecta para todos los gatos y perros desde los más pequeños hasta los más señor. Es carne rica en ácidos grasos, los cuales son cardiosaludables, ayudando a proteger la salud del corazón. Además tiene un contenido en colesterol muy bajo, es rica en vitaminas del grupo B y tiene un alto contenido en hierro. ¡A tu perro y gato le encantará, la perfecta alternativa al pollo!\r\n\r\nEste artículo viene en piezas, empaquetado al vacío y congelado a -18ºC durante mínimo 2 semanas. Solamente debe ser suminstrado crudo.', 11.95, 1, 'La carne de pavo es especialmente tierna y magra, perfecta para todos los gatos y perros', 'images/carrito/18.jpg', 100),
(19, 'Conejo Entero Picado con Hueso, 500g', 'Conejo entero picado incluyendo los huesos y las vísceras - ¡La dieta natural casera no puede ser más fácil! Solamente hay que añadir verdura, fruta y un poco de aceite de pescado ¡y listo el menú básico natural!\r\n\r\nLa carne de conejo no puede faltar en ninguna dieta BARF. El conejo es un firme favorito entre todas las razas de gatos y a menudo la opción de caza en el campo para todos los perros. Libre de alérgenos, es una perfecta opción para perros y gatos con alergia alimenticia. A parte de su alto contenido en las vitaminas B12, B3 y B6 la carne de conejo destaca por su contenido en hierro, selenio, potasio y zinc – todos necesarios para fortalecer el sistema inmunitario de tu amigo, desarrollar un pelo espléndido, generar un fuerte aparato muscular y garantizar una buena digestión.\r\n\r\nEste artículo viene picado muy fino, empaquetado al vacío y congelado a -18ºC durante mínimo 2 semanas. Sólo debe ser suministrado crudo.', 3.29, 1, 'Conejo entero picado incluyendo los huesos y las vísceras', 'images/carrito/19.jpg', 100),
(20, 'Selección de Huesos de Cordero, 1kg', '¡Esta selección de huesos no puede faltar en ninguna casa! Es una deliciosa mezcla de huesos carnosos y huesos recreativos crudos de cordero.   \r\n\r\nEl cordero es una proteína completa y muy rica en vitaminas A y B, incluyendo B12, además de minerales esenciales como el cobre, el zinc, el fósforo y el selenio. Tiene un contenido de grasa único, ya que más de la mitad de la grasa (alrededor del 60%) es de tipo insaturada, saludable y muy fácil de digerir para tu perro.\r\n\r\nSupervisa a tu perro y gato siempre cuando juega con los huesos ya que en ocasiones se pueden romper o astillarse. \r\n\r\nEste artículo viene en piezas separadas y congeladas a -18ºC durante un mínimo de 2 semanas. Sólo debe ser suministrado en crudo.', 3.95, 1, 'El cordero es una proteína completa y muy rica en vitaminas A y B, incluyendo B12', 'images/carrito/20.jpg', 100),
(21, 'Mix de Cordero, 500g', 'Un mix especial de carne de músculo de cordero (carne de faringe y tripa verde). El cordero es una proteína completa y repleta de vitaminas A y B incluyendo B12 además de minerales esenciales como el cobre, el zinc, el fósforo y el selenio. El cordero también tiene un contenido de grasa único, ya que más de la mitad de la grasa (alrededor del 60%) es de tipo insaturada saludable, muy fácil de digerir por el organismo de tu perro. Hemos añadido tripa verde de cordero a este mix para reforzar la flora intestinal y el sistema inmunitario de tu perro.\r\n\r\nEste artículo viene picado, empaquetado al vacío y congelado a -18ºC durante mínimo 2 semanas. Sólo debe ser suministrado crudo.', 2.95, 1, 'Un mix especial de carne de músculo de cordero (carne de faringe y tripa verde)', 'images/carrito/21.jpg', 100),
(22, 'Tripa Verde de Calidad de Cordero, 500g', 'La tripa verde se caracteriza por su perfil muy diverso de nutrientes incluyendo fitonutrientes y probióticos como el lactobacillus acidophilus, perfecto para ayudar a mantener una flora intestinal óptima y por tanto un sistema inmunitario fuerte. Además contiene grandes cantidades de enzimas digestivas naturales que no sólo ayudan a establecer un buen tránsito intestinal necesario para una buena salud y una buena digestión, sino que también ayudan a mejorar el metabolismo, la función hormonal y a estimular el sistema inmunitario. Además, está llena de vitaminas, minerales (sobre todo hierro) y colina (indicada en casos de lesiones hepáticas). "Una carne mágica" según Javier Arias, "padre" de dos perritos que adoran su plato de tripa verde.\r\n\r\nEste artículo viene picado, empaquetado al vacío y congelado a -18ºC durante mínimo 2 semanas. Sólo debe ser suministrado crudo.', 2.95, 1, 'La tripa verde se caracteriza por su perfil de nutrientes incluyendo fitonutrientes y probióticos', 'images/carrito/22.jpg', 100),
(23, 'Carne de Ciervo, 2kg', 'A tu perro y gato se les hará la boca agua! El ciervo es una carne magra rica en nutrientes llena de vitamina B, altos niveles de B12 y hierro. Es además conocida por su irresistible sabor a madera. Siendo animal salvaje se ha criado en su hábitat natural alimentándose de forma totalmente natural, por lo que su carne es especialmente sana y pura.\r\n\r\nPese a que se usan detectores de metales para eliminar restos de proyectiles, puede ocurrir que algunos de estos restos todavía estén presentes en la carne. Por ello siempre recomendamos inspeccionarla antes de servirla.\r\n\r\nEl artículo difiere de la imagen ejemplo, y viene cortado en virutas grandes, empaquetado y congelado en aproximadamente 6 bloques a -18ºC durante mínimo 2 semanas. Sólo debe ser suministrado crudo.', 10.95, 1, 'El ciervo es una carne magra rica en nutrientes llena de vitamina B', 'images/carrito/23.jpg', 100),
(24, 'Selección de Huesos de Ciervo y Corzo, 1kg', '¡Una selección de huesos para perros con un paladar fino! Es una delicia masticable de huesos carnosos, huesos recreativos y cartílago. Tiene un exquisito sabor a madera, da entretenimiento sano, contiene minerales esenciales y es excelente para limpiar los dientes - ¡a tu perro le encantará!\r\n\r\nEsta selección es mejor para perros adultos, puede ser demasiado duro para los dientes de cachorros y perros señior.\r\n\r\nSupervisa a tu perro y gato siempre cuando juega con los huesos ya que en ocasiones pueden romper o astillarse.\r\n\r\nEste artículo viene en piezas separadas y congeladas a -18ºC durante mínimo 2 semanas. Sólo debe ser suministrado crudo.', 3.95, 1, 'Esta selección es mejor para perros adultos', 'images/carrito/24.jpg', 100),
(25, 'Mix de Caza, 500g', '¡A tu perro y gato se les hará la boca agua! Este artículo es una sabrosa mezcla de carne de ciervo y muflón. Siendo animales salvajes se han criado en su hábitat natural alimentándose de forma totalmente natural, por lo que su carne es especialmente sana y pura. Destaca sobre todo por su alto contenido en vitamina B, B12 y hierro.\r\n\r\nPese a que se usan detectores de metales para eliminar restos de proyectiles, puede ocurrir que algunos de estos restos todavía estén presentes en la carne. Por ello siempre recomendamos inspeccionarla antes de servirla.\r\n\r\nEste artículo viene picado, empaquetado al vacío y congelado a -18ºC durante mínimo 2 semanas. Solamente debe ser suminstrado crudo.', 3.29, 1, 'Este artículo viene picado, empaquetado al vacío y congelado a -18ºC durante mínimo 2 semanas.', 'images/carrito/25.jpg', 100),
(26, 'Puro Salmón, 500g', '¡A tu perro y gato les encanta la variedad! Por eso nuestro Puro Salmón no puede faltar en tu cesta de compra. El salmón es una excelente fuente de proteínas de alto valor biológico, fácil de digerir, llena de aminoácidos esenciales y sobre todo rica en ácidos grasos esenciales Omega 3. Servido 1-2 veces a la semana proporciona un pelo brillante y fortalece el funcionamiento cardiovascular e inmunitario - para perros y gatos vitales y felices. Se van a relamer de gusto.\r\n\r\nEste artículo viene picado, empaquetado al vacío y congelado a -18ºC durante un mínimo 2 semanas. Sólo debe ser suministrado en crudo. Aunque nuestro Puro Salmón está perfectamente congelado puedes observar algo de líquido que es el aceite de salmón que no se congela.', 3.95, 1, 'Este artículo viene picado, empaquetado al vacío y congelado a -18ºC durante un mínimo 2 semanas', 'images/carrito/26.jpg', 100),
(27, 'Tripa Verde de Calidad de Vacuno, 500g', 'La tripa verde se caracteriza por su perfil muy diverso de nutrientes incluyendo fitonutrientes y probióticos como el lactobacillus acidophilus, perfecto para ayudar a mantener una flora intestinal óptima y por tanto un sistema inmunitario fuerte. Además contiene grandes cantidades de enzimas digestivas naturales que no sólo ayudan a establecer un buen tránsito intestinal necesario para una buena salud y una buena digestión, sino que también ayudan a mejorar el metabolismo, la función hormonal y a estimular el sistema inmunitario. Además, está llena de vitaminas, minerales (sobre todo hierro) y colina (indicada en casos de lesiones hepáticas). "Una carne mágica" según Javier Arias, "padre" de dos perritos que adoran su plato de tripa verde.\r\n\r\nEste artículo viene picado, empaquetado al vacío y congelado a -18ºC durante mínimo 2 semanas. Sólo debe ser suministrado crudo.', 2.49, 1, 'La tripa verde se caracteriza por su perfil muy diverso de nutrientes', 'images/carrito/27.jpg', 100),
(28, 'Tripa Verde LIGERA de Calidad, 500g', 'Omaso de vacuno - ¡un secreto bien guardado! El omaso es el tercer estómago de la vaca. Su contenido vegetal muestra un estado de digestión elevado en comparación con el contenido del rumen de la vaca (Tripa Verde de ternera). Su carne es magra – todo esto hace que el omaso de vacuno se convierta en una delicia altamente nutritiva, además de ser muy fácil de digerir y ligero – perfecto para principiantes de la dieta BARF, perros senior, cachorros y perros con sobrepeso. Tiene menos calorías que la tripa verde tradicional (rumen), por lo que es una muy buena alternativa en épocas de calor o cuando hace falta reducir el peso.\r\n\r\nEste artículo viene picado, empaquetado al vacío y congelado a -18ºC durante mínimo 2 semanas. Sólo debe ser suministrado crudo.', 2.49, 1, 'El omaso es el tercer estómago de la vaca. Este artículo viene picado, empaquetado y congelado', 'images/carrito/28.jpg', 100),
(29, 'Mix de Verdura y Fruta Congelado, 500g', '¿Cansada de cortar y picar verdura y fruta para los platos caseros de tu perro o gato? Nosotros también. Por eso te queremos presentar este delicioso mix de verdura y fruta repleto de vitaminas, minerales y fibras - ¡100% natural y nada de cereales, prometido!\r\n\r\nLa preparación del plato casero de tu perro y gato no puede ser más rápido con este mix. Simplemente hace falta descongelarlo, mezclarlo con carne de músculo y órgano, añadir sus huesos carnosos favoritos, refinarlo todo con un poco de aceite de pescado y ¡listo! Si luego añades un poco de kefir natural, huevo, algas marinas, espirulina, viruta de coco, sangre y ajo, estamos hablando de un menú de lujo. Con una pizca de amor no dejará indefinido a ningún perro, te querrá aún más, si esto es posible.\r\n\r\nEste artículo viene natural crudo, picado, empaquetado al vacío y congelado a -18ºC.', 1.95, 2, 'Simplemente hace falta descongelarlo, mezclarlo con carne de músculo y órgano', 'images/carrito/29.jpg', 100),
(30, 'Copos de Verdura Deshidratados, 1kg', 'Pelar, cortar, cocer y triturar verdura – ¡ya no hace falta! Los copos deshidratados simplemente se mezclan con agua y se añaden a la ración diaria de carne de tu perro o gato.\r\n\r\nEstos copos de verdura no contienen nada de cereales – son también perfectos para perros o gatos con alergia alimentaria. Se componen de una amplia y rica selección de verduras: zanahorias, chirivía, remolacha, guisantes, espinacas, tomates, alfalfa, ortiga y diente de león - todo pelado y cocido ligeramente al vapor, aportando un amplio perfil de vitaminas, minerales y fibras a cualquier dieta natural casera.\r\n\r\n¡Los copos cunden mucho! Un paquete de 1kg de copos deshidratados resulta en 3,5 kilos de copos listos para servir – cada kilo sale solamente a 1,70 EUR.', 9.95, 2, 'Se componen de una amplia y rica selección de verduras: zanahorias, chirivía, remolacha y más', 'images/carrito/30.jpg', 100),
(31, 'Copos de Hortalizas de Raíz Deshidratados, 1kg', 'Pelar, cortar, cocer y triturar verdura – ¡ya no hace falta! Los copos deshidratados simplemente se mezclan con agua y se añaden a la ración diaria de carne de tu perro o gato.\r\n\r\nEstos copos de hortalizas de raíz no contienen nada de cereales – son también perfectos para perros y gatos con alergia alimentaria. Se componen de una amplia y rica selección de hortalizas: patatas, chirivía, remolacha forrajera, zanahoria, colinabo, calabacín, calabaza, apio - todo pelado y cocido ligeramente al vapor, aportando un amplio perfil de vitaminas, minerales y fibras a cualquier dieta natural casera.\r\n\r\nLas hortalizas de raíz son conocidas por sus múltiples beneficios, entre ellos la reducción del riesgo de padecer determinadas enfermedades como el cáncer, las relacionadas con el corazón y las arterias y las derivadas de procesos inflamatorios. Tienen un efecto muy positivo sobre la actividad y los niveles de energía de tu compañero.', 9.95, 2, 'Se componen de una amplia y rica selección de hortalizas', 'images/carrito/31.jpg', 100),
(32, 'Aceite de Pescado y Onagra, 250ml', 'Este aceite de pescado se extrae en frío de sardinas, anchoas, arenques y caballa y contiene aproximadamente un 30% de ácidos poli-insaturados Omega 3, EPA y DHA (niveles superiores a la mayoría de aceites de pescado del mercado). Estos ácidos se encuentran de manera abundante sólo en formas de vida marina y son de especial importancia para el organismo de los mamíferos ya que, como nuestros perros, los mamíferos pueden producir de ácidos Omega 3 ALA de cadena corta (alfa-linoleicos) ácidos poli-insaturados Omega 3, aunque casi nunca en la cantidad necesaria.\r\n\r\nAl contener vitamina E natural, por un lado se mejora la resistencia del aceite al oxígeno del aire, y por el otro, compensa la necesidad extra del organismo de vitamina E para la absorción de los ácidos grasos.\r\n\r\nLos productos Barf Pro-Q son de alta calidad y con frecuencia superan los valores de otros productos del mercado.', 15.9, 3, 'Este aceite de pescado se extrae en frío de sardinas, anchoas, arenques y caballa', 'images/carrito/32.jpg', 100),
(33, 'Spirulina, 100g', 'La Spirulina Platensis es un tipo de Cianobacteria (antes conocidas como Algas Azules). Al contrario que las algas de mar, la Spirulina, como cianobacteria de agua dulce no contiene yodo. Sus células no tienen núcleo y la cobertura es tan débil que sus vitaminas, minerales y nutrientes son fácilmente absorbibles por el intestino.\r\n\r\nEl polvo seco contiene hasta un 60% de proteína de alto valor y fácil de digerir, con casi todos los amino-ácidos necesarios. La Spirulina proporciona por lo tanto un fantástico aporte energético frente a exigencias derivadas de altas dosis de actividad en los animales.\r\n\r\nEste producto procede del cultivo ecológico.\r\n\r\nImportante: los complementos alimentarios no son aptos por sí mismos para tratar enfermedades sino, como mucho, influenciar un tratamiento correcto que sólo debería ser responsabilidad de tu veterinario.', 8.95, 3, 'La Spirulina Platensis es un tipo de Cianobacteria (antes conocidas como Algas Azules).', 'images/carrito/33.jpg', 100),
(34, 'Cal de Algas Lithothamne, 250g', 'El Lithothamnium Calcareum (Cal de Algas) es esencial para una alimentación sana a base de carne. Se elabora a partir de la calcificación de algas rojas que crecen en las aguas cristalinas del lecho marino. Tras ser cuidadosamente cosechadas, se limpian, secan y se muelen hasta obtener el polvo.\r\n\r\nSe trata 100% de un producto vegetal sin aditivos y está plagado de nutrientes orgánicos vitales como oligoelementos, minerales y sustancias bio-activas (de origen vegetal). Debido a su alto contenido en calcio biológico, es ideal como fuente de este mineral. Además, su ratio calcio – fósforo es formidable, nada menos que de un 420:1.', 6.95, 3, 'El Lithothamnium Calcareum (Cal de Algas) es esencial para una alimentación sana a base de carne', 'images/carrito/34.jpg', 100),
(35, 'Calcio, 250g', 'Al contrario que las harinas de hueso, este producto se obtiene a partir del enfriamiento de huesos de vaca crudos y sin tratar. A través de este proceso delicado, los principios activos no se destruyen. En el caso de los triturados y harinas de hueso, normalmente se preparan usando vapor de agua y calentamiento, por lo que se pueden perder nutrientes. MCH Calcio se testea regularmente para evitar la presencia de metales pesados como el plomo. En el caso de harinas de hueso, estos tests no se suelen realizar.\r\n\r\nOtra de las ventajas de este producto es la estructura en microcristales, que proporciona máxima disponibilidad para ser absorbida por el organismo.', 9.9, 3, 'Este producto se obtiene a partir del enfriamiento de huesos de vaca crudos', 'images/carrito/35.jpg', 100),
(36, 'Fitoplancton, 80g', 'El fitoplancton es una de las fuentes más valiosas de nutrición que hay en la tierra y tiene unos beneficios increíblemente altos para la alimentación y la salud. Y no sólo para humanos, para nuestros perros, gatos y hurones se trata de un complemento muy serio y potente.\r\n\r\nProvee un espectro impresionante de más de 100 nutrientes incluyendo aminoácidos, encimas, clorofila, ácidos grasos esenciales, minerales, vitaminas y oligoelementos, todo en un balance perfecto. Es altamente biodisponible y contiene niveles especialmente altos de ácidos grasos omega 3 EPA (ácidos grasos poliinsaturados esenciales).', 28.9, 3, 'El fitoplancton es una de las fuentes más valiosas de nutrición que hay en la tierra', 'images/carrito/36.jpg', 100),
(37, 'Cáscara de Escaramujo, 150g', 'La vitamina C es un poderoso antioxidante que reduce la presencia de radicales libres y puede reforzar las defensas ante situaciones de estrés físico o psíquico. Los antioxidantes se relacionan directamente con procesos positivos para contra-restar el proceso del envejecimiento. \r\n\r\nLa Cáscara de Escaramujo también puede ayudar a las articulaciones, reduciendo inflamaciones y regenerando el cartílago. Además, baja el ph del tracto urinario lo que es necesario en procesos de infecciones urinarios.', 6.95, 3, 'La vitamina C es un poderoso antioxidante que reduce la presencia de radicales libres', 'images/carrito/37.jpg', 100),
(38, 'Extracto de Mejillón Verde Liofilizado, 150g', 'El extracto de mejillón de labio verde (Perna canaliculus) es un producto 100% natural, secado en frío. El polvo contiene sólo la parte carnosa del mejillón, sin cáscara. Su contenido de glicoaminoglicanos (compuesto de amino-azúcares) es importante para la estructura blanda de las articulaciones (cartílago y cápsulas sinoviales). Debido a su contenido natural de taurina, es un producto perfecto también para los dueños de gatos.', 18.9, 0, 'El extracto de mejillón de labio verde es un producto 100% natural, secado en frío', 'images/carrito/38.jpg', 100),
(39, 'Collagile® dog, 225g', 'El “secreto” de Collagile® dog es su colágeno hidrolizado de cadena corta con alta biodisponibilidad (se absorbe de manera muy eficiente). Estos péptidos de colágeno biodisponibles se generan a partir de colágeno hidrolizado utilizando un proceso enzimático natural. Collagile® dog incluye, solamente, péptidos demostrados eficaces, que pueden ser absorbidos fácilmente por el cuerpo del animal y, por tanto, llegan a actuar en las zonas problemáticas, como las células del cartílago, ligamentos y huesos dañados. Una vez absorbidos, equivalen al cartílago articular natural, que hace la función de amortiguador en las articulaciones.\n\nCollagile® dog puede contribuir a prevenir los problemas del aparato locomotor y a regenerar las áreas afectadas, actuando de forma prolongada. Además hemos podido observar en nuestros propios perros una mejora del aspecto del pelo y de las uñas.', 23.9, 3, 'El “secreto” de Collagile® dog es su colágeno hidrolizado de cadena corta', 'images/carrito/39.jpg', 100),
(40, 'Cáscara de Huevo, 150g', 'Si está dando una dieta natural cruda o cocida casera es muy importante asegurar el aporte de calcio. Esto solamente es posible sirviendo huesos carnosos crudos. Hay muchos perros a los que no les gustan los huesos carnosos y todavía más gatos que no son grandes seguidores de roer huesos.\r\n\r\nNuestro polvo de Cáscaras de Huevos BIO es una fuente 100% natural de calcio de origen animal y asegura el balance de calcio - fósforo (la carne es muy rica en fósforo y necesita ser equilibrada por el calcio). Es molido de forma muy fina por lo que tiene una muy alta biodisponibilidad y palatabilidad.\r\n\r\nEste producto procede de producción ecológica.\r\n\r\nImportante: los complementos alimentarios no son aptos por sí mismos para tratar enfermedades sino apoyar un tratamiento correcto que sólo debería ser responsabilidad de tu veterinario.', 8.95, 3, 'Nuestro polvo de Cáscaras de Huevos BIO es una fuente 100% natural de calcio de origen animal', 'images/carrito/40.jpg', 100),
(41, 'Alga Ascophyllum Nodosum, 150g', 'Debido a su alto contenido en minerales, oligoelementos y vitaminas, es ideal como ingrediente habitual en las comidas. Sus nutrientes naturales no solo son óptimos debido a su bio-disponibilidad sino que ayudan a acentuar el color del pelaje típico de cada raza. El manto se ve nutrido y el contenido en yodo natural optimiza el funcionamiento de la tiroides.\r\n\r\nEl Ascophyllum Nodosum es el ingrediente principal del producto PlaqueOff, para el cuidado de dientes y encías de perros y gatos. \r\n\r\nSi un perro o gato sufre de problemas de tiroides consultar con el veterinario antes de servirlo.', 5.95, 3, 'Sus nutrientes naturales ayudan a acentuar el color del pelaje típico de cada raza.', 'images/carrito/41.jpg', 100),
(42, 'Cáscara de Psyllium, 150g', 'La Cáscara de Psyllium es una fuente rica en fibra soluble. El polvo de la cáscara se hincha y multiplica su volumen original al humedecerse. Los llamados polisacáridos mucilaginosos se encuentran en la cáscara de las semillas y son responsables del pronunciado comportamiento de aumento de volumen y de la alta unión al agua. Estos mucílagos aumentan de forma natural el volumen de alimento ingerido y, por lo tanto, son ideales para perros que no se sacian fácilmente como un suplemento de saturación. Otro efecto positivo es el aumento en el volumen de las heces, que puede ser un apoyo para problemas recurrentes en las glándulas anales. Encuentra nuestra receta casera aquí.\r\n\r\nLa fibra soluble que se encuentra en el Psyllium también es adecuada para perros con el sistema digestivo sensible.\r\n\r\nComo la Cáscara de Psyllium forma una gelatina y recubre el estómago y el intestino, puede afectar a la absorción de medicamentos. Por favor, adelanta la toma de medicamentos a la toma de Psyllium.', 7.95, 3, 'La Cáscara de Psyllium es una fuente rica en fibra soluble.', 'images/carrito/42.jpg', 100),
(43, 'Levadura de Cerveza, 100g', 'Importantes nutrientes como amino-ácidos, vitaminas del grupo B, enzimas, minerales y oligoelementos están presentes en la levadura de cerveza de forma natural y en alta biodisponibilidad. Su contenido de fósforo, potasio, magnesio, calcio, hierro, zinc, cobre y manganeso y elementos traza, como el cobalto, molibdeno, cromo y selenio contribuyen de manera importante a la alimentación diaria de tu perro y gato. ', 5.95, 3, 'Importantes nutrientes como amino-ácidos, vitaminas del grupo B, enzimas, minerales y oligoelementos', 'images/carrito/43.jpg', 100);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tipo_alimento`
--

CREATE TABLE `tipo_alimento` (
  `id` int(11) NOT NULL,
  `name` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `description` varchar(250) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Volcado de datos para la tabla `tipo_alimento`
--

INSERT INTO `tipo_alimento` (`id`, `name`, `description`) VALUES
(1, 'alimentos_crudos', 'Alimentación cruda'),
(2, 'verduras_frutas', 'Verduras y Frutas'),
(3, 'suplementos', 'Suplementos');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `id` int(11) NOT NULL,
  `username` varchar(20) CHARACTER SET latin1 NOT NULL,
  `password` varchar(100) CHARACTER SET latin1 NOT NULL,
  `firstname` varchar(50) CHARACTER SET latin1 NOT NULL,
  `lastname1` varchar(50) CHARACTER SET latin1 NOT NULL,
  `lastname2` varchar(50) CHARACTER SET latin1 DEFAULT NULL,
  `phone` int(9) DEFAULT NULL,
  `email` varchar(150) CHARACTER SET latin1 NOT NULL,
  `address` varchar(250) CHARACTER SET latin1 DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `username`, `password`, `firstname`, `lastname1`, `lastname2`, `phone`, `email`, `address`) VALUES
(17, 'espe2', '$2y$10$qKrHpoYNNO50vgd4Th.XduADi3Fqpf1zdfK8Yxw/aEQwu7sM4USFC', 'espe', 'rei', '', 0, 'esperanza@hotmail.com', ''),
(18, 'espe3', '$2y$10$1uzrlEimtSy7s20WhVNr4eE4HtULLCfq1XfQT7f6xqRJ4JGmGEG1W', 'espe', 'rei', '', 0, 'esperanza@hotmail.com', ''),
(19, 'espe4', '$2y$10$FRgtJdbawwEemj8J0rcD2eCSwwDu6dol.xLzzxmkbKRewXL9yYqBm', 'espe', 'rei', '', 0, 'esperanza@hotmail.com', ''),
(20, 'espe5', '$2y$10$XQsU.2MaseXvwoTIa62GReQXXGsLUYpWDT6uY1k2jwXEOvJNV0fji', 'espe', 'rei', '', 0, 'esperanza@hotmail.com', ''),
(21, 'espe6', '$2y$10$fmXhIEAMRvkd.IQCNBIkX.Z/UXMyMlqnn46VqdWrKT2/RHzGGKXmW', 'espe', 'rei', '', 0, 'esperanza@hotmail.com', ''),
(22, 'espe7', '$2y$10$KEMir4262JAb8mHXwud4cOhswDWQHIXs52L7r1IbGUlUJddxmt1LO', 'espe', 'rei', '', 0, 'esperanza@hotmail.com', ''),
(23, 'espe10', '$2y$10$acsG0d03fEMp6RQfSbiOzemXS4wD2ckk6sEkxxKyVg7fBIryyTCzS', 'espe', 'rei', '', 0, 'esperanza@hotmail.com', ''),
(24, 'espe11', '$2y$10$UWK/nrWbanFj3GOVdDw.G.C5TYJbpdOaH6G6lIUZjsslgE86couYq', 'espe', 'rei', '', 0, 'esperanza@hotmail.com', ''),
(25, 'espe12', '$2y$10$ohP10Ffs4y/BaPIR.6BrEu0zySu9DCviPnBhSZIg7mlntj8E0qaUW', 'espe', 'rei', '', 0, 'esperanza@hotmail.com', ''),
(26, 'espe13', '$2y$10$4yY.u7DMAH5/M2KqajNV.u6g15WNsQcEenG/nEUkusnEEROZZoB/G', 'espe', 'rei', '', 0, 'esperanza@hotmail.com', ''),
(27, 'espe14', '$2y$10$mHOhhJnSNv0km6tP7Jzqa.yEMqjiI/8SpFj3mEwc5w9/UxolSw.Zi', 'espe', 'rei', '', 0, 'esperanza@hotmail.com', ''),
(28, 'esperanza', '$2y$10$jGkkgHSbSqrBnniE/H9h8OHfwd3CBBoRUeFNOaEwNDMNid9Z6d1gu', 'espe', 'rei', '', 0, 'esperanza@hotmail.com', ''),
(29, 'test', '$2y$10$CprJ2SO1zl/21H.3thoiKu2Vaek1lnACm3q0AmvM9M/Hcjrbidw.m', 'test', 'test', '', 0, 'esperanza@hotmail.com', ''),
(30, 'espe', '$2y$10$yVCiibIQoH9uVNKes9KvM.dVGrOMNT3qt5BCKALVUjFmGLgeQ/D.W', 'espe', 'rei', '', 0, 'esperanza@hotmail.com', ''),
(31, 'espe', '123456', 'espe', 'rei', NULL, NULL, 'espe@reipo.com', NULL),
(32, 'espe85', '$2y$10$XRuPK6orJ4.nNaXlw2h7vuM.wyLMif8/k8PcnJejnCk1QgNhHfDyG', 'espe', 'rei', '', 0, 'esperanza@hotmail.com', '');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `carrito`
--
ALTER TABLE `carrito`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `productos`
--
ALTER TABLE `productos`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `tipo_alimento`
--
ALTER TABLE `tipo_alimento`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `id` (`id`),
  ADD KEY `id_2` (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `carrito`
--
ALTER TABLE `carrito`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
--
-- AUTO_INCREMENT de la tabla `productos`
--
ALTER TABLE `productos`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=44;
--
-- AUTO_INCREMENT de la tabla `tipo_alimento`
--
ALTER TABLE `tipo_alimento`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=33;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
