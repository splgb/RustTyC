var searchIndex = JSON.parse('{\
"rusttyc":{"doc":"This crate provides an interface to perform lattice-based …","i":[[0,"types","rusttyc","This mod contains everything related to types and …",null,null],[8,"Variant","rusttyc::types","A variant that will be inferred during the type checking …",null,null],[16,"Err","","Result of a meet of two incompatible type, i.e., it …",0,null],[10,"top","","Returns the unconstrained, most abstract type.",0,[[]]],[10,"meet","","Attempts to meet two variants respecting their …",0,[[["partial",3]],[["result",4],["partial",3]]]],[10,"arity","","Indicates whether the variant has a fixed arity.  Note …",0,[[],["arity",4]]],[8,"ContextSensitiveVariant","","A [Variant] which requires a context for meet operations …",null,null],[16,"Err","","Result of a meet of two incompatible type, i.e., it …",1,null],[16,"Context","","Represents the meet- and equality context.",1,null],[10,"top","","Returns the unconstrained, most abstract type.",1,[[]]],[10,"meet","","Attempts to meet two variants respecting their …",1,[[["partial",3]],[["partial",3],["result",4]]]],[10,"arity","","Indicates whether the variant has a fixed arity.  Note …",1,[[],["arity",4]]],[10,"equal","","Context-sensitive version of [Eq].  All rules apply.",1,[[],["bool",15]]],[4,"Arity","","Represents the arity of a [Variant] or […",null,null],[13,"Variable","","The arity is variable, i.e., it does not have a specific …",2,null],[13,"Fixed","","The arity has a fixed value.",2,null],[3,"Partial","","Partial is a container for a [ContextSensitiveVariant] …",null,null],[12,"variant","","The variant represented by this <code>Partial</code>.",3,null],[12,"least_arity","","The least number of children the variant will have after …",3,null],[3,"Preliminary","","Represents a preliminary output of the type check.  …",null,null],[12,"variant","","The type variant of the entity represented by this …",4,null],[12,"children","","The [TcKey]s of the children of this variant.",4,null],[6,"PreliminaryTypeTable","","A type table containing a [Preliminary] type for each […",null,null],[6,"TypeTable","","A type table containing the constructed type of the …",null,null],[8,"Constructable","","A type implementing this trait can potentially be …",null,null],[16,"Type","","The result type of the attempted construction.",5,null],[10,"construct","","Attempts to transform <code>self</code> into an more concrete …",5,[[],["result",4]]],[3,"TcKey","rusttyc","An inexpensive and simple indexing mechanism using during …",null,null],[4,"TcErr","","Represents an error during the type check procedure.",null,null],[13,"KeyEquation","","Two keys were attempted to be equated and their …",6,null],[13,"Bound","","An explicit type bound imposed on a key turned out to be …",6,null],[13,"ChildAccessOutOfBound","","This error occurs when a constraint accesses the <code>n</code>th …",6,null],[13,"ArityMismatch","","This error occurs if the type checker inferred a specific …",6,null],[12,"key","rusttyc::TcErr","The key for which the mismatch was detected.",7,null],[12,"variant","","The variant with fixed arity.",7,null],[12,"inferred_arity","","The least required arity according to the type check …",7,null],[12,"reported_arity","","The arity required according to the meet operation that …",7,null],[13,"Construction","rusttyc","An error reporting a failed type construction.  Contains …",6,null],[13,"ChildConstruction","","This error indicates that a variant requires children, …",6,null],[13,"CyclicGraph","","TODO   ",6,null],[8,"TcVar","","Represents a re-usable variable in the type checking …",null,null],[3,"TypeChecker","","The [TypeChecker] is the main interaction point for the …",null,null],[6,"VarlessTypeChecker","","A [TypeChecker] instance in case no variables are …",null,null],[11,"from","","",8,[[]]],[11,"into","","",8,[[]]],[11,"to_owned","","",8,[[]]],[11,"clone_into","","",8,[[]]],[11,"borrow","","",8,[[]]],[11,"borrow_mut","","",8,[[]]],[11,"try_from","","",8,[[],["result",4]]],[11,"try_into","","",8,[[],["result",4]]],[11,"type_id","","",8,[[],["typeid",3]]],[11,"from","","",9,[[]]],[11,"into","","",9,[[]]],[11,"to_owned","","",9,[[]]],[11,"clone_into","","",9,[[]]],[11,"borrow","","",9,[[]]],[11,"borrow_mut","","",9,[[]]],[11,"try_from","","",9,[[],["result",4]]],[11,"try_into","","",9,[[],["result",4]]],[11,"type_id","","",9,[[],["typeid",3]]],[11,"from","","",6,[[]]],[11,"into","","",6,[[]]],[11,"to_owned","","",6,[[]]],[11,"clone_into","","",6,[[]]],[11,"borrow","","",6,[[]]],[11,"borrow_mut","","",6,[[]]],[11,"try_from","","",6,[[],["result",4]]],[11,"try_into","","",6,[[],["result",4]]],[11,"type_id","","",6,[[],["typeid",3]]],[11,"from","rusttyc::types","",2,[[]]],[11,"into","","",2,[[]]],[11,"to_owned","","",2,[[]]],[11,"clone_into","","",2,[[]]],[11,"borrow","","",2,[[]]],[11,"borrow_mut","","",2,[[]]],[11,"try_from","","",2,[[],["result",4]]],[11,"try_into","","",2,[[],["result",4]]],[11,"type_id","","",2,[[],["typeid",3]]],[11,"from","","",3,[[]]],[11,"into","","",3,[[]]],[11,"to_owned","","",3,[[]]],[11,"clone_into","","",3,[[]]],[11,"borrow","","",3,[[]]],[11,"borrow_mut","","",3,[[]]],[11,"try_from","","",3,[[],["result",4]]],[11,"try_into","","",3,[[],["result",4]]],[11,"type_id","","",3,[[],["typeid",3]]],[11,"from","","",4,[[]]],[11,"into","","",4,[[]]],[11,"to_owned","","",4,[[]]],[11,"clone_into","","",4,[[]]],[11,"borrow","","",4,[[]]],[11,"borrow_mut","","",4,[[]]],[11,"try_from","","",4,[[],["result",4]]],[11,"try_into","","",4,[[],["result",4]]],[11,"type_id","","",4,[[],["typeid",3]]],[11,"clone","rusttyc","",8,[[],["tckey",3]]],[11,"clone","","",9,[[],["typechecker",3]]],[11,"clone","","",6,[[],["tcerr",4]]],[11,"clone","rusttyc::types","",2,[[],["arity",4]]],[11,"clone","","",3,[[],["partial",3]]],[11,"clone","","",4,[[],["preliminary",3]]],[11,"default","rusttyc","",9,[[]]],[11,"cmp","","",8,[[["tckey",3]],["ordering",4]]],[11,"eq","","",8,[[["tckey",3]],["bool",15]]],[11,"ne","","",8,[[["tckey",3]],["bool",15]]],[11,"partial_cmp","","",8,[[["tckey",3]],[["option",4],["ordering",4]]]],[11,"lt","","",8,[[["tckey",3]],["bool",15]]],[11,"le","","",8,[[["tckey",3]],["bool",15]]],[11,"gt","","",8,[[["tckey",3]],["bool",15]]],[11,"ge","","",8,[[["tckey",3]],["bool",15]]],[11,"fmt","","",8,[[["formatter",3]],["result",6]]],[11,"fmt","","",9,[[["formatter",3]],["result",6]]],[11,"fmt","","",6,[[["formatter",3]],["result",6]]],[11,"fmt","rusttyc::types","",2,[[["formatter",3]],["result",6]]],[11,"fmt","","",3,[[["formatter",3]],["result",6]]],[11,"fmt","","",4,[[["formatter",3]],["result",6]]],[11,"hash","rusttyc","",8,[[]]],[11,"concretizes","","Connects two keys asymmetrically.  Refining <code>bound</code> refines …",8,[[],[["constraint",4],["contextsensitivevariant",8]]]],[11,"equate_with","","Equates two keys, i.e., they refer to the same type and …",8,[[],[["constraint",4],["contextsensitivevariant",8]]]],[11,"concretizes_explicit","","Declares that <code>self</code> is at least as concrete as <code>bound</code>.",8,[[["contextsensitivevariant",8]],[["constraint",4],["contextsensitivevariant",8]]]],[11,"is_meet_of","","Declares that <code>self</code> is the meet of <code>left</code> and <code>right</code>. This …",8,[[],[["constraint",4],["contextsensitivevariant",8]]]],[11,"is_meet_of_all","","Declares that <code>self</code> is the meet of all elements contained …",8,[[],[["constraint",4],["contextsensitivevariant",8]]]],[11,"is_sym_meet_of","","Declares that <code>self</code> is the symmetric meet of <code>left</code> and <code>right</code>…",8,[[],[["constraint",4],["contextsensitivevariant",8]]]],[11,"is_sym_meet_of_all","","Declares that <code>self</code> is the symmetric meet of all elements …",8,[[],[["constraint",4],["contextsensitivevariant",8]]]],[11,"without_vars","","Instantiates a new, empty type checker that does not …",9,[[],["varlesstypechecker",6]]],[11,"new","","Creates a new, empty type checker.  ",9,[[]]],[11,"with_context","","Creates a new, empty type checker.  ",9,[[]]],[11,"new_term_key","","Generates a new key representing a term.  ",9,[[],["tckey",3]]],[11,"get_var_key","","Manages keys for variables.  It checks if <code>var</code> already has …",9,[[],["tckey",3]]],[11,"get_child_key","","Provides a key to the <code>nth</code> child of the type behind <code>parent</code>.…",9,[[["usize",15],["tckey",3]],[["tcerr",4],["result",4],["tckey",3]]]],[11,"impose","","Imposes a constraint on keys.  They can be obtained by …",9,[[["constraint",4]],[["tcerr",4],["result",4]]]],[11,"lift_into","","Lifts a collection of keys as children into a certain …",9,[[["vec",3],["tckey",3]],["tckey",3]]],[11,"lift_partially","","Lifts a collection of keys as subset of children into a …",9,[[["vec",3],["option",4]],["tckey",3]]],[11,"all_keys","","Returns an iterator over all keys currently present in …",9,[[]]],[11,"update_context","","TODO",9,[[]]],[11,"type_check_preliminary","","Finalizes the type check procedure without constructing a …",9,[[],[["result",4],["preliminarytypetable",6],["tcerr",4]]]],[11,"type_check","","Finalizes the type check procedure. Calling this function …",9,[[],[["tcerr",4],["result",4],["typetable",6]]]]],"p":[[8,"Variant"],[8,"ContextSensitiveVariant"],[4,"Arity"],[3,"Partial"],[3,"Preliminary"],[8,"Constructable"],[4,"TcErr"],[13,"ArityMismatch"],[3,"TcKey"],[3,"TypeChecker"]]}\
}');
addSearchOptions(searchIndex);initSearch(searchIndex);