CREATE DATABASE IF NOT EXISTS petshop;
USE petshop;

-- Crear tabla de productos
CREATE TABLE IF NOT EXISTS Productos (
    Id INT AUTO_INCREMENT PRIMARY KEY,
    Nombre VARCHAR(100) NOT NULL,
    Precio DECIMAL(18,2) NOT NULL,
    Imagen VARCHAR(500),
    Descripcion VARCHAR(1000),
    Stock INT DEFAULT 0,
    Categoria VARCHAR(50),
    FechaCreacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    Activo BOOLEAN DEFAULT TRUE
);

INSERT INTO Productos (Nombre, Precio, Imagen, Descripcion, Stock, Categoria, FechaCreacion, Activo) VALUES
('Alimento para perro', 2500.00, 'assets/images/alimento-perro.webp', 'Alimento premium para perros adultos, rico en proteínas y vitaminas. Ideal para perros de todas las razas y tamaños.', 50, 'Alimentos', NOW(), TRUE),
('Juguete para gato', 1200.00, 'assets/images/juguete-gato.jpg', 'Juguete interactivo para gatos con plumas y cascabel. Estimula el instinto de caza de tu felino.', 30, 'Juguetes', NOW(), TRUE),
('Pecera pequeña', 8000.00, 'assets/images/pecera-pequeña.jpg', 'Pecera de 20 litros con filtro incluido, perfecta para peces pequeños. Incluye decoración y plantas artificiales.', 15, 'Acuarios', NOW(), TRUE),
('Rascador para gato', 3500.00, 'assets/images/rascador-gatos.png', 'Rascador de sisal natural con múltiples niveles y juguetes colgantes. Perfecto para gatos activos.', 25, 'Accesorios', NOW(), TRUE),
('Jaula para hámster', 6000.00, 'assets/images/jaula-hamster.webp', 'Jaula espaciosa con rueda de ejercicio y accesorios incluidos. Ideal para hámsters y roedores pequeños.', 20, 'Jaulas', NOW(), TRUE),
('Cama para perro grande', 7200.00, 'assets/images/perro-grande.jpg', 'Cama ortopédica para perros grandes, con memoria viscoelástica. Proporciona máximo confort y soporte.', 10, 'Camas', NOW(), TRUE);

SELECT * FROM Productos; 