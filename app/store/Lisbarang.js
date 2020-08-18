Ext.define('Inventori.store.Lisbarang', {
    extend: 'Ext.data.Store',
    storeId: 'lisbarang',
    alias: 'store.lisbarang',
    autoLoad: true,
    autoSync: true,
    fields: [
        'nomor', 'id_barang', 'nama_barang', 'old_nama_barang', 'nama_kategori', 'jumlah_barang', 'old_jumlah_barang', 'nama_satuan', 'id_user'
    ],


    proxy: {
        type: 'jsonp',
        api: {
            read: "http://localhost/inventaris/apibarang.php?action=1",
            create: "http://localhost/inventaris/apibarang.php?action=2",
            destroy: "http://localhost/inventaris/apibarang.php?action=3",
            update: "http://localhost/inventaris/apibarang.php?action=4",
        },
        extraParams: {
        cid : localStorage.getItem('id_user')
        },
        reader: {
            type: 'json',
            rootProperty: 'items'

        }
    }
});