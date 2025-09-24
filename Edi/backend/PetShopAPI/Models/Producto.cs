using System.ComponentModel.DataAnnotations;

namespace PetShopAPI.Models
{
    public class Producto
    {
        public int Id { get; set; }
        
        [Required]
        [StringLength(100)]
        public string Nombre { get; set; } = string.Empty;
        
        [Required]
        [Range(0, double.MaxValue)]
        public decimal Precio { get; set; }
        
        [StringLength(500)]
        public string? Imagen { get; set; }
        
        [StringLength(1000)]
        public string? Descripcion { get; set; }
        
        [Range(0, int.MaxValue)]
        public int Stock { get; set; } = 0;
        
        [StringLength(50)]
        public string? Categoria { get; set; }
        
        public DateTime FechaCreacion { get; set; } = DateTime.Now;
        
        public bool Activo { get; set; } = true;
    }
} 