function Resume() {
  return (
    <>
      <div id="resume-output" className="pdf-embed">
        <embed src="/michael-caiati-resume.pdf" type="application/pdf" width="100%" height="100%" />
      </div>
    </>
  );
}

export default Resume;