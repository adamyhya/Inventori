Ext.define('Inventori.store.Lisbarang', {
    extend: 'Ext.data.Store',
    alias: 'store.lisbarang',
    autoLoad: true,
    autoSync: true,
    fields: [
        'nomor', 'id_barang', 'nama_barang', 'nama_kategori', 'jumlah_barang', 'nama_satuan'
    ],


    proxy: {
        type: 'jsonp',
        api: {
            read: "http://localhost/inventaris/apibarang.php"
        },
        reader: {
            type: 'json',
            rootProperty: 'items'
        }
    }
});
