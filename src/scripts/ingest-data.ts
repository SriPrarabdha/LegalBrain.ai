import { RecursiveCharacterTextSplitter } from 'langchain/text_splitter';
import { OpenAIEmbeddings } from 'langchain/embeddings';
import { PineconeStore } from 'langchain/vectorstores';
import { client } from '@/utils/pinecone-client';
import { PDFLoader } from 'langchain/document_loaders';
import { PINECONE_INDEX_NAME, PINECONE_NAME_SPACE } from '@/utils/pinecone';

/* Name of directory to retrieve files from. You can change this as required */
const filePath = 'docs/MorseVsFrederick.pdf';

export const run = async () => {
  try {
    /*load raw docs from the pdf file in the directory */
    const loader = new PDFLoader(filePath);
    // const loader = new PDFLoader(filePath);
    const rawDocs = await loader.load();

    console.log(rawDocs);

    /* Split text into chunks */
    const textSplitter = new RecursiveCharacterTextSplitter({
      chunkSize: 1000,
      chunkOverlap: 200,
    });

    const docs = await textSplitter.splitDocuments(rawDocs);
    console.log('split docs', docs);

    console.log('creating vector store...');
    /*create and store the embeddings in the vectorStore*/
    const embeddings = new OpenAIEmbeddings();
    console.log("h");
    const pineconeIndex = client.Index(PINECONE_INDEX_NAME); //change to your own index name
    console.log("e");
    
    //embed the PDF documents
    await PineconeStore.fromDocuments(
      docs,
      embeddings,
      {pineconeIndex},
      // 'text',
      // PINECONE_NAME_SPACE,
    );
  } catch (error) {
    console.log('error', error);
    throw new Error('Failed to ingest your data');
  }
};

(async () => {
  await run();
  console.log('ingestion complete');
})();
