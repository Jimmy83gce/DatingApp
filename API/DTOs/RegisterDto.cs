using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;

namespace API.DTOs
{
    
    public class RegisterDto
    {
        [Required(ErrorMessage="Nazwa użytkownika wymagana")]
        public string Username {get; set;}

        [Required(ErrorMessage="Hasło wymagane")]
        public string Password { get; set; }
    }
}