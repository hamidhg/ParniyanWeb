using Microsoft.EntityFrameworkCore.Migrations;

namespace Parniyan.DataLayer.Migrations
{
    public partial class esmemPedarDar_Database : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Fathername",
                table: "Users",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Fathername",
                table: "Users");
        }
    }
}
