package com.uns.api.Categoria.entity;

import javax.persistence.*;

@Entity
@Table( name = "categoria" )
public class Categoria {
	
	@Id
	@GeneratedValue( strategy = GenerationType.IDENTITY )
	@Column( name = "id_categoria",
	         updatable = false )
	private int id;
	
	@Column( name = "nombre",
	         length = 45,
	         nullable = false )
	private String nombre;
	
	public Categoria() {
	}
	
	public int getId() {
		return id;
	}
	
	public void setId( int id ) {
		this.id = id;
	}
	
	public String getNombre() {
		return nombre;
	}
	
	public void setNombre( String nombre ) {
		this.nombre = nombre;
	}
}
