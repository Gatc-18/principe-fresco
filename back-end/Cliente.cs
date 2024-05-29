//------------------------------------------------------------------------------
// <auto-generated>
//     Este código se generó a partir de una plantilla.
//
//     Los cambios manuales en este archivo pueden causar un comportamiento inesperado de la aplicación.
//     Los cambios manuales en este archivo se sobrescribirán si se regenera el código.
// </auto-generated>
//------------------------------------------------------------------------------

namespace Diseno
{
    using Newtonsoft.Json;
    using System;
    using System.Collections.Generic;
    
    public partial class Cliente
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public Cliente()
        {
            this.PrendaUSadas = new HashSet<PrendaUSada>();
            this.Transaccions = new HashSet<Transaccion>();
        }
    
        public int idCliente { get; set; }
        public string Nombre { get; set; }
        public string Contrasena { get; set; }
        public string Email { get; set; }
        public string Direccion { get; set; }
        public int idRol { get; set; }
        public Nullable<int> idMoneda { get; set; }

        [JsonIgnore]
        public virtual Moneda Moneda { get; set; }
        [JsonIgnore]
        public virtual Rol Rol { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        [JsonIgnore]
        public virtual ICollection<PrendaUSada> PrendaUSadas { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        [JsonIgnore]
        public virtual ICollection<Transaccion> Transaccions { get; set; }
    }
}