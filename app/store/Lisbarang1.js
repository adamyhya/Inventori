Ext.define('Inventori.store.Lisbarang1', {
    extend: 'Ext.data.Store',
    storeId: 'lisbarang1',
    alias: 'store.lisbarang1',
    autoLoad: true,
    autoSync: true,
    fields: [
        'nomor', 'id_barang', 'nama_barang', 'nama_kategori', 'jumlah_barang', 'nama_satuan'
    ],


    proxy: {
        type: 'jsonp',
        api: {
            read: "http://localhost/inventaris/apibarang.php?action=1",            
        },
        reader: {
            type: 'json',
            rootProperty: 'items'

        }
    }
});
