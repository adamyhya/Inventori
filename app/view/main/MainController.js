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
    id_kategori = Ext.getCmp('namak').getValue();
    id_satuan = Ext.getCmp('namas').getValue();
    nama_barang = Ext.getCmp('namab').getValue();
    jumlah_barang = Ext.getCmp('jumlahb').getValue();
    store = Ext.getStore('lisbarang');
    store.beginUpdate();
    store.insert(0, {'id_kategori':id_kategori, 'id_satuan':id_satuan, 'nama_barang': nama_barang, 'jumlah_barang':jumlah_barang});
    store.endUpdate();
    store.load();
    alert("Inserting..");
    Ext.getCmp('tbarangfrm').reset();
    },
    addMasuk: function(){
        id_barang = Ext.getCmp('id_barang').getValue();
        nama_barang = Ext.getCmp('namam').getValue();
        jumlah_barang = Ext.getCmp('jumlahm').getValue();
        keterangan = Ext.getCmp('keterangan').getValue();
        id_jurusan = Ext.getCmp('jurusanm').getValue();
        id_pengguna = '1';
        store = Ext.getStore('lismasuk');
        store.beginUpdate();
        store.insert(0, {'id_barang': id_barang , 'nama_barang': nama_barang, 'jumlah_barang_masuk': jumlah_barang, 'keterangan': keterangan, 'id_jurusan': id_jurusan, 'id_pengguna' : id_pengguna});
        store.endUpdate();
        store.load();
        alert("Inserting..");
        Ext.getStore('lisbarang1').clearFilter();
        Ext.getStore('lisbarang').load();
        
    },    

    delBarang: function() {
        record = Ext.getCmp('lbarang').getSelection();
        Ext.getStore('lisbarang').remove(record);
        Ext.getStore('lisbarang').load();
        alert("Inserting..");
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
