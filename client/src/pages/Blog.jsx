import React, { Component } from 'react';
import { motion } from 'framer-motion';
import Modal from '../components/Modal';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};
const itemVariants = {
  hidden: { x: -100, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 0.5 } }
};
class BlogEntry extends Component {
  state = { isModalOpen: false };

  toggleModal = () => this.setState(prevState => ({ isModalOpen: !prevState.isModalOpen }));

  render() {
    const { id, title, content, imageUrl } = this.props.entry;
    const { isModalOpen } = this.state;

    return (
      <motion.div
        variants={itemVariants}
        initial="hidden"
        animate="visible"
        className="p-4 mb-4 bg-white rounded-lg shadow-lg cursor-pointer hover:shadow-2xl transition-shadow duration-300"
        onClick={this.toggleModal}
      >
        <h2 className="text-2xl font-semibold mb-3 italic">{title}</h2>
        {imageUrl && (
          <img src={imageUrl} alt={title} className="w-full h-64 rounded-lg object-cover mb-3" />
        )}
        {isModalOpen && (
          <Modal isOpen={isModalOpen} onClose={this.toggleModal}>
            <img src={imageUrl} alt={title} className="rounded-lg mb-4" />
            <h2 className="text-3xl font-bold mb-4 italic">{title}</h2>
            <p className="text-lg">{content}</p>
          </Modal>
        )}
      </motion.div>
    );
  }
}

class Blog extends Component {
  state = {
    entries: [
            {
              id: 1,
              title: 'Consejos Prácticos para Explorar Mérida',
              content: 'Mérida es un destino que ofrece una mezcla única de aventura, cultura y tranquilidad. Aquí van algunos consejos para aprovechar al máximo tu visita: 1) Planifica tu viaje durante la temporada seca, entre octubre y marzo, para disfrutar de las actividades al aire libre. 2) No te pierdas el teleférico de Mérida, el más alto y largo del mundo, para vistas espectaculares de la ciudad y los Andes. 3) Explora el mercado principal para probar delicias locales como la arepa andina y el caldo de muto. 4) Si eres aventurero, anímate a hacer trekking en los parques nacionales cercanos o parapente sobre el valle. 5) Recuerda llevar efectivo, ya que muchos comercios pequeños no aceptan tarjetas.',
              imageUrl: 'https://st2.depositphotos.com/1064045/10170/i/950/depositphotos_101709718-stock-photo-cute-little-retro-car.jpg'
            },
            {
              id: 2,
              title: 'Descubriendo la laguna',
              content: 'Explorando la biodiversidad y los secretos de la laguna más hermosa de merida.Esta imponente y hermosa Laguna se encuentra en el Parque Sierra Nevada a una altura de 3625-3655 msnm y justo en la vía que va de Apartaderos hacia Santo Domingo y Barinas, a un kilómetro de la carretera Trasandina, lo que hace que sea de fácil acceso, brindando la oportunidad de visitarla en auto.',
              imageUrl: 'https://static.depositphotos.com/storage/image/be9be95df675f3afa6d73f8d36f820ec0579e0b2.jpg'
            },
            {
              id: 3,
              title: 'Aventuras en las Montañas Andinas',
              content: 'Un viaje inolvidable por los senderos menos conocidos de los AndesEl pico Bolívar de 4985 metros es la Un viaje inolvidable por los senderos menos conocidos de los AndesEl pico Bolívar de 4985 metros es la mayor elevación de la cordillera seguido del Humboldt a 4942 metros donde reposa en su base el último glaciar activo de VenezuelaLa tercera altitud corresponde al pico La Concha de 4922 metros Luego el Bonpland 4883 metros cumbre vecina al HumboldUn viaje inolvidable por los senderos menos conocidos de los AndesEl pico Bolívar de 4985 metros es la mayor elevación de la cordillera seguido del Humboldt a 4942 metros donde reposa en su base el último glaciar activo de VenezuelaLa tercera altitud corresponde al pico La Concha de 4922 metros Luego el Bonpland 4883 metros cumbre vecina al Humboldt Toro de 4.758 y León a 4720t Toro de 4.758 y León a 4720mayor elevación de la cordillera seguido del Humboldt a 4942 metros donde reposa en su base el último glaciar activo de VenezuelaLa tercera altitud corresponde al pico La Concha de 4922 metros Luego el Bonpland 4883 metros cumbre vecina al Humboldt Toro de 4.758 y León a 4720',
              imageUrl: 'https://st.depositphotos.com/1591133/2421/i/380/depositphotos_24215473-stock-photo-mt-fitz-roy-summit-in.jpg'
            },
          ]
  };
  render() {
    return (
      <motion.div
        className="container mx-auto p-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <header className="mb-8">
          <motion.h1
            className="text-4xl font-bold text-center text-sky-700 mb-6"
            variants={itemVariants}
            initial="hidden"
            animate="visible"
          >
            Blog
          </motion.h1>
        </header>
        <main>
          {this.state.entries.map(entry => (
            <BlogEntry key={entry.id} entry={entry} />
          ))}
        </main>
      </motion.div>
    );
  }
}
export default Blog;
