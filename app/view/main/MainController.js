/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('Inventori.view.main.MainController', {
    extend: 'Ext.app.ViewController',


    alias: 'controller.main',

    onItemSelected: function (sender, record) {
        Ext.Msg.confirm('Confirm', 'Are you sure?', 'onConfirm', this);
    },

    onConfirm: function (choice) {
        if (choice === 'yes') {
            //
        }
    },
    
    batalB: function(){
    this.getView().destroy();
    Ext.Viewport.add(Ext.create('Inventori.view.main.Main'));
    },
    
    carik: function(){
    Ext.Viewport.add(Ext.create('Inventori.view.main.barang.Barang'));
    },
    
    addJurusan: function(){
    this.getView().destroy();            
    Ext.Viewport.add(Ext.create('Inventori.view.main.jurusan.Tambahjurusan'));
    },
    addSatuan: function(){
    this.getView().destroy();            
    Ext.Viewport.add(Ext.create('Inventori.view.main.addSatuan'));
    },
    addKategori: function(){
    this.getView().destroy();            
    Ext.Viewport.add(Ext.create('Inventori.view.main.addKategori'));
    },

    addBarang: function(){
    this.getView().destroy();            
    Ext.Viewport.add(Ext.create('Inventori.view.main.barang.Tambahbarang'));
    },
    
    onLoginClick: function() {

        this.getView().destroy();

        // Add the main view to the viewport
        Ext.Viewport.add(Ext.create('Inventori.view.main.Main'));

    },
    onConfirm1: function (choice) {
        if (choice === 'yes') {
            //
        }
    }
});
