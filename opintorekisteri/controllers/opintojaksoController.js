const M = require("../models/opintojaksoModel");

exports.getAll = async (req,res)=>{ try{ res.json(await M.getAll()); }catch(e){ res.status(500).json({error:e.message}); } };
exports.create = async (req,res)=>{ try{ res.status(201).json({id: await M.create(req.body)}); }catch(e){ res.status(500).json({error:e.message}); } };
exports.update = async (req,res)=>{ try{ const ok=await M.update(req.params.id,req.body); if(!ok) return res.status(404).json({error:"Not found"}); res.json({updated:true}); }catch(e){ res.status(500).json({error:e.message}); } };
exports.remove = async (req,res)=>{ try{ const ok=await M.remove(req.params.id); if(!ok) return res.status(404).json({error:"Not found"}); res.json({deleted:true}); }catch(e){ res.status(500).json({error:e.message}); } };
